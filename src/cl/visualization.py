"""Visualization helpers for continual learning experiments.

Provides reusable plotting functions for loss landscapes, accuracy/loss
timelines, and training-trajectory overlays.
"""

import matplotlib.pyplot as plt
import numpy as np
import torch


# ---------------------------------------------------------------------------
# Loss landscape
# ---------------------------------------------------------------------------

def compute_loss_landscape(model, criterion, loader, device=None,
                           steps=30, scale=0.5, seed=42):
    """Compute a 2-D loss landscape around the current model parameters.

    Two random orthonormal directions are sampled, and the loss is evaluated
    on a ``steps × steps`` grid centred on the current weights.

    Args:
        model:     The model whose neighbourhood to probe.
        criterion: Loss function.
        loader:    ``DataLoader`` to evaluate on.
        device:    Device string (auto-detected if *None*).
        steps:     Grid resolution along each axis.
        scale:     Half-width of the grid in parameter space.
        seed:      Random seed for reproducible directions.

    Returns:
        A dict with keys ``'alphas'``, ``'betas'``, ``'Z'``, ``'d1'``,
        ``'d2'``, ``'base_params'``.
    """
    if device is None:
        device = next(model.parameters()).device

    torch.manual_seed(seed)
    params = torch.cat([p.detach().flatten() for p in model.parameters()]).to(device)
    dim = params.numel()

    d1 = torch.randn(dim, device=device)
    d1 /= d1.norm()
    d2 = torch.randn(dim, device=device)
    d2 /= d2.norm()

    alphas = np.linspace(-scale, scale, steps)
    betas = np.linspace(-scale, scale, steps)
    Z = np.zeros((steps, steps))

    for i, a in enumerate(alphas):
        for j, b in enumerate(betas):
            new_params = params + a * d1 + b * d2
            idx = 0
            for p in model.parameters():
                numel = p.numel()
                p.data = new_params[idx : idx + numel].view_as(p).clone()
                idx += numel

            model.eval()
            loss_val = 0.0
            with torch.no_grad():
                for x, y in loader:
                    x, y = x.to(device), y.to(device)
                    loss_val += criterion(out := model(x), y).item()
            Z[j, i] = loss_val / len(loader)

    # Restore original parameters
    idx = 0
    for p in model.parameters():
        numel = p.numel()
        p.data = params[idx : idx + numel].view_as(p).clone()
        idx += numel

    return {
        "alphas": alphas,
        "betas": betas,
        "Z": Z,
        "d1": d1,
        "d2": d2,
        "base_params": params,
    }


# ---------------------------------------------------------------------------
# Plotting helpers
# ---------------------------------------------------------------------------

def plot_loss_landscape(landscape, *, title="Loss Landscape", cmap="viridis"):
    """Render a filled contour plot of a 2-D loss landscape.

    Args:
        landscape: Dict returned by :func:`compute_loss_landscape`.
        title:     Plot title.
        cmap:      Matplotlib colourmap name.
    """
    fig, ax = plt.subplots(figsize=(6, 5))
    cf = ax.contourf(landscape["alphas"], landscape["betas"],
                     landscape["Z"], levels=50, cmap=cmap)
    fig.colorbar(cf, ax=ax, label="Loss")
    ax.set_title(title)
    ax.set_xlabel("Direction 1")
    ax.set_ylabel("Direction 2")
    plt.tight_layout()
    return fig


def plot_accuracy_timeline(acc_a, acc_b, epochs_a, epochs_b,
                           acc_a_during_b=None):
    """Plot per-epoch training accuracy across two sequential tasks.

    Args:
        acc_a:          List of accuracies during Task A training.
        acc_b:          List of accuracies during Task B training.
        epochs_a:       Number of Task A epochs.
        epochs_b:       Number of Task B epochs.
        acc_a_during_b: Optional list of Task A *test* accuracies recorded
                        during Task B training (shows the forgetting curve).
    """
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(range(1, epochs_a + 1), acc_a, "o-", label="Task A train acc", markersize=3)
    ax.plot(range(epochs_a + 1, epochs_a + epochs_b + 1), acc_b, "s-",
            label="Task B train acc", markersize=3)
    if acc_a_during_b:
        ax.plot(range(epochs_a + 1, epochs_a + len(acc_a_during_b) + 1),
                acc_a_during_b, "x-", color="red",
                label="Task A test acc (during B)", markersize=3)
    ax.axvline(x=epochs_a + 0.5, color="gray", linestyle="--", label="Task switch")
    ax.set_title("Accuracy Timeline")
    ax.set_xlabel("Epoch")
    ax.set_ylabel("Accuracy")
    ax.legend()
    ax.grid(True)
    plt.tight_layout()
    return fig


def plot_loss_timeline(loss_a, loss_b, epochs_a, epochs_b):
    """Plot per-epoch log-loss across two sequential tasks.

    Args:
        loss_a:   List of losses during Task A training.
        loss_b:   List of losses during Task B training.
        epochs_a: Number of Task A epochs.
        epochs_b: Number of Task B epochs.
    """
    fig, ax = plt.subplots(figsize=(8, 5))
    ax.plot(range(1, epochs_a + 1), np.log(loss_a), "o-",
            label="Task A log-loss", markersize=3)
    ax.plot(range(epochs_a + 1, epochs_a + epochs_b + 1), np.log(loss_b), "s-",
            label="Task B log-loss", markersize=3)
    ax.axvline(x=epochs_a + 0.5, color="gray", linestyle="--", label="Task switch")
    ax.set_title("Log-Loss Timeline")
    ax.set_xlabel("Epoch")
    ax.set_ylabel("Log Loss")
    ax.legend()
    ax.grid(True)
    plt.tight_layout()
    return fig


def plot_trajectory_overlay(snapshots, landscape, *,
                            title="Training Trajectory on Loss Landscape",
                            cmap="viridis"):
    """Overlay the training trajectory on a loss-landscape contour plot.

    Args:
        snapshots:  List of model snapshots (``nn.Module`` deep-copies).
        landscape:  Dict returned by :func:`compute_loss_landscape`.
        title:      Plot title.
        cmap:       Matplotlib colourmap name.
    """
    device = landscape["base_params"].device
    d1, d2 = landscape["d1"], landscape["d2"]
    base = landscape["base_params"]

    traj = []
    for snap in snapshots:
        params = torch.cat([p.detach().flatten() for p in snap.parameters()]).to(device)
        diff = params - base
        traj.append((torch.dot(diff, d1).item(), torch.dot(diff, d2).item()))
    traj = np.array(traj)

    fig, ax = plt.subplots(figsize=(6, 5))
    ax.contourf(landscape["alphas"], landscape["betas"],
                landscape["Z"], levels=50, cmap=cmap)
    ax.plot(traj[:, 0], traj[:, 1], "w--o", markersize=3, label="Trajectory A→B")
    ax.set_title(title)
    ax.set_xlabel("Direction 1")
    ax.set_ylabel("Direction 2")
    ax.legend()
    plt.tight_layout()
    return fig

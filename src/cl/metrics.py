"""Evaluation metrics for continual learning experiments."""

import torch


def evaluate(model, loader, device=None):
    """Compute classification accuracy over an entire DataLoader.

    Args:
        model:  A ``torch.nn.Module`` whose output logits have shape ``(B, C)``.
        loader: A ``DataLoader`` yielding ``(inputs, targets)`` batches.
        device: Device string (e.g. ``'cuda'``).  If *None*, auto-detected
                from the model's first parameter.

    Returns:
        Accuracy as a float in ``[0, 1]``.
    """
    if device is None:
        device = next(model.parameters()).device

    model.eval()
    correct, total = 0, 0
    with torch.no_grad():
        for x, y in loader:
            x, y = x.to(device), y.to(device)
            pred = model(x).argmax(dim=1)
            correct += (pred == y).sum().item()
            total += y.size(0)
    return correct / total

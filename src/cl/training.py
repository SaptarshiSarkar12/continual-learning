"""Strategy-agnostic training loops."""

import copy

from cl.metrics import evaluate


def train_and_log(model, loader, optimizer, criterion, epochs,
                  device=None, snapshots=None, eval_loader=None):
    """Train *model* and return per-epoch accuracy / loss histories.

    Args:
        model:       ``nn.Module`` to train.
        loader:      Training ``DataLoader``.
        optimizer:   Optimizer instance.
        criterion:   Loss function.
        epochs:      Number of epochs.
        device:      Device (auto-detected if *None*).
        snapshots:   List to append model deep-copies to each epoch.
        eval_loader: Secondary ``DataLoader`` evaluated each epoch
                     (e.g. to track forgetting on a previous task).

    Returns:
        ``(accuracies, losses, eval_accuracies)`` — three lists.
        *eval_accuracies* is empty when *eval_loader* is *None*.
    """
    if device is None:
        device = next(model.parameters()).device

    accs, losses, eval_accs = [], [], []
    for epoch in range(epochs):
        model.train()
        epoch_loss = 0.0
        for x, y in loader:
            x, y = x.to(device), y.to(device)
            optimizer.zero_grad()
            out = model(x)
            loss = criterion(out, y)
            loss.backward()
            optimizer.step()
            epoch_loss += loss.item()
        losses.append(epoch_loss / len(loader))
        accs.append(evaluate(model, loader, device))
        if eval_loader is not None:
            eval_accs.append(evaluate(model, eval_loader, device))
        if snapshots is not None:
            snapshots.append(copy.deepcopy(model))
    return accs, losses, eval_accs

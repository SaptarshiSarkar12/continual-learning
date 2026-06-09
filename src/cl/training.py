"""Generic training loops for continual learning experiments.

The functions here are intentionally strategy-agnostic so that every demo
(catastrophic forgetting, EWC, SI, knowledge distillation, …) can reuse the
same core loop and only override the loss computation when needed.
"""

import copy

from cl.metrics import evaluate


def train_and_log(model, loader, optimizer, criterion, epochs,
                  device=None, snapshots=None, eval_loader=None):
    """Train *model* and return per-epoch accuracy / loss histories.

    Args:
        model:     A ``torch.nn.Module``.
        loader:    Training ``DataLoader``.
        optimizer: A ``torch.optim.Optimizer``.
        criterion: Loss function (e.g. ``nn.CrossEntropyLoss()``).
        epochs:    Number of training epochs.
        device:    Device string.  If *None*, auto-detected from the model.
        snapshots: If provided, a *list* to which a ``deepcopy`` of the model
                   is appended after every epoch (used for trajectory plots).
        eval_loader: If provided, a secondary ``DataLoader`` on which accuracy
                     is evaluated after every epoch (e.g. to track forgetting).

    Returns:
        ``(accuracies, losses, eval_accuracies)`` — three lists of length
        *epochs*.  *eval_accuracies* is empty when *eval_loader* is *None*.
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

"""Evaluation metrics."""

import torch


def evaluate(model, loader, device=None):
    """Compute classification accuracy over a DataLoader."""
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

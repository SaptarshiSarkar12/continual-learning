"""General-purpose helpers for continual learning experiments."""

import torch


def get_device():
    """Return the best available device (``'cuda'`` if available, else ``'cpu'``)."""
    return "cuda" if torch.cuda.is_available() else "cpu"
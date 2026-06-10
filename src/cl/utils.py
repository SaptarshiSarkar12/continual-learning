"""General-purpose helpers."""

import torch


def get_device():
    """Return ``'cuda'`` if available, else ``'cpu'``."""
    return "cuda" if torch.cuda.is_available() else "cpu"
"""Data loading utilities for continual learning experiments.

Provides helpers to load and split standard datasets (e.g. MNIST) into
per-task subsets for sequential training.
"""

from pathlib import Path

from torch.utils.data import Subset
from torchvision import datasets, transforms

# Resolve to <project_root>/data regardless of the current working directory.
# The layout is:  src/cl/data.py  →  parents[2] = project root
_PROJECT_ROOT = Path(__file__).resolve().parents[2]
_DATA_DIR = _PROJECT_ROOT / "data"


def get_mnist_split(digits, train=True):
    """Return an MNIST subset containing only the specified digit classes.

    Downloads MNIST on first use into the project-level ``data/`` directory so
    that the same cached copy is reused regardless of where the script or
    notebook is launched from.

    Args:
        digits: Iterable of digit labels (0-9) to include.
        train:  If ``True`` return training split, otherwise test split.

    Returns:
        A ``torch.utils.data.Subset`` of MNIST filtered to *digits*.
    """
    dataset = datasets.MNIST(
        root=str(_DATA_DIR),
        train=train,
        download=True,
        transform=transforms.ToTensor(),
    )
    idx = [i for i, t in enumerate(dataset.targets) if t in digits]
    return Subset(dataset, idx)
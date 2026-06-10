"""Dataset loading and splitting utilities."""

from pathlib import Path

from torch.utils.data import Subset
from torchvision import datasets, transforms

_PROJECT_ROOT = Path(__file__).resolve().parents[2]
_DATA_DIR = _PROJECT_ROOT / "data"


def get_mnist(train=True):
    """Return the full MNIST dataset."""
    return datasets.MNIST(
        root=str(_DATA_DIR),
        train=train,
        download=True,
        transform=transforms.ToTensor(),
    )


def get_mnist_split(digits, train=True):
    """Return an MNIST subset containing only the specified digit classes."""
    dataset = get_mnist(train=train)
    idx = [i for i, t in enumerate(dataset.targets) if t in digits]
    return Subset(dataset, idx)


def get_fashion_mnist(train=True):
    """Return the Fashion-MNIST dataset."""
    return datasets.FashionMNIST(
        root=str(_DATA_DIR),
        train=train,
        download=True,
        transform=transforms.ToTensor(),
    )
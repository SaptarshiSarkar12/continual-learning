"""``cl`` — shared utilities for continual learning demonstrations."""

from cl.data import get_fashion_mnist, get_mnist, get_mnist_split
from cl.metrics import evaluate
from cl.models import SimpleCNN, SimpleMLP
from cl.training import train_and_log
from cl.utils import get_device
from cl.visualization import (
    compute_loss_landscape,
    plot_accuracy_timeline,
    plot_loss_landscape,
    plot_loss_timeline,
    plot_trajectory_overlay,
)

__all__ = [
    "get_fashion_mnist",
    "get_mnist",
    "get_mnist_split",
    "evaluate",
    "SimpleCNN",
    "SimpleMLP",
    "train_and_log",
    "get_device",
    "compute_loss_landscape",
    "plot_accuracy_timeline",
    "plot_loss_landscape",
    "plot_loss_timeline",
    "plot_trajectory_overlay",
]

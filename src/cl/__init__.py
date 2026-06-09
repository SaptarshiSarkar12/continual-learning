"""``cl`` — shared utilities for continual learning demonstrations.

Submodules
----------
- :mod:`cl.data`          — dataset loading and task splitting
- :mod:`cl.models`        — lightweight neural network architectures
- :mod:`cl.metrics`       — evaluation helpers (accuracy, etc.)
- :mod:`cl.training`      — generic training loops
- :mod:`cl.visualization` — loss landscapes, timelines, trajectory plots
- :mod:`cl.utils`         — device detection and other helpers
"""

from cl.data import get_mnist_split
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

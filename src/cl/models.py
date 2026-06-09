"""Simple neural network architectures for continual learning demos.

These small models are intentionally kept lightweight so that the
demonstrations run quickly even on CPU-only machines.
"""

import torch
from torch import nn


class SimpleCNN(nn.Module):
    """A minimal 2-layer CNN for 28×28 grayscale image classification.

    Architecture::

        Conv2d(1→32, 3×3) → ReLU
        Conv2d(32→64, 3×3) → ReLU → MaxPool2d(2)
        Flatten → Linear(9216→128) → ReLU → Linear(128→10)
    """

    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(1, 32, 3, 1)
        self.conv2 = nn.Conv2d(32, 64, 3, 1)
        self.fc1 = nn.Linear(9216, 128)
        self.fc2 = nn.Linear(128, 10)

    def forward(self, x):
        x = torch.relu(self.conv1(x))
        x = torch.relu(self.conv2(x))
        x = nn.functional.max_pool2d(x, 2)
        x = torch.flatten(x, 1)
        x = torch.relu(self.fc1(x))
        return self.fc2(x)


class SimpleMLP(nn.Module):
    """A 3-layer fully-connected network for 28×28 grayscale images.

    Architecture::

        Flatten → Linear(784→256) → ReLU
        Linear(256→128) → ReLU → Linear(128→10)
    """

    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(28 * 28, 256)
        self.fc2 = nn.Linear(256, 128)
        self.fc3 = nn.Linear(128, 10)

    def forward(self, x):
        x = torch.flatten(x, 1)
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        return self.fc3(x)
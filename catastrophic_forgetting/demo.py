"""Catastrophic Forgetting Demo

Train on MNIST (Task A) then Fashion-MNIST (Task B) and observe forgetting.

Usage:
    uv run catastrophic_forgetting/demo.py
"""

import matplotlib.pyplot as plt
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader

from cl import (
    SimpleCNN,
    evaluate,
    get_device,
    get_fashion_mnist,
    get_mnist,
    train_and_log,
    compute_loss_landscape,
    plot_accuracy_timeline,
    plot_loss_landscape,
    plot_loss_timeline,
    plot_trajectory_overlay,
)

# ── Config ───────────────────────────────────────────────────────────────
device = get_device()
EPOCHS_A = 100
EPOCHS_B = 100
BATCH_SIZE = 128

# ── Data ─────────────────────────────────────────────────────────────────
trainA = DataLoader(get_mnist(train=True), batch_size=BATCH_SIZE, shuffle=True)
testA  = DataLoader(get_mnist(train=False), batch_size=256)
trainB = DataLoader(get_fashion_mnist(train=True), batch_size=BATCH_SIZE, shuffle=True)
testB  = DataLoader(get_fashion_mnist(train=False), batch_size=256)

# ── Model ────────────────────────────────────────────────────────────────
model = SimpleCNN().to(device)
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters())

# ── Task A (MNIST) ───────────────────────────────────────────────────────
snapshots = []
print("Training on Task A (MNIST)…")
accA, lossA, _ = train_and_log(model, trainA, optimizer, criterion,
                               EPOCHS_A, snapshots=snapshots)
accA_before = evaluate(model, testA)

landscape_A = compute_loss_landscape(model, criterion, testA)
plot_loss_landscape(landscape_A, title="Loss Landscape — Task A (MNIST)", cmap="viridis")
plt.show()

# ── Task B (Fashion-MNIST) ───────────────────────────────────────────────
print("Training on Task B (Fashion-MNIST)…")
accB, lossB, accA_during_B = train_and_log(model, trainB, optimizer, criterion,
                                           EPOCHS_B, snapshots=snapshots,
                                           eval_loader=testA)
accA_after = evaluate(model, testA)
accB_final = evaluate(model, testB)

landscape_B = compute_loss_landscape(model, criterion, testB)
plot_loss_landscape(landscape_B, title="Loss Landscape — Task B (Fashion-MNIST)", cmap="plasma")
plt.show()

# ── Timelines ────────────────────────────────────────────────────────────
plot_accuracy_timeline(accA, accB, EPOCHS_A, EPOCHS_B,
                       acc_a_during_b=accA_during_B)
plt.show()

plot_loss_timeline(lossA, lossB, EPOCHS_A, EPOCHS_B)
plt.show()

# ── Trajectory on Task A landscape ───────────────────────────────────────
plot_trajectory_overlay(snapshots, landscape_A)
plt.show()

# ── Results ──────────────────────────────────────────────────────────────
print(f"\nAccuracy on Task A (MNIST) before Task B     : {accA_before:.3f}")
print(f"Accuracy on Task A (MNIST) after  Task B     : {accA_after:.3f}")
print(f"Accuracy on Task B (Fashion-MNIST) final      : {accB_final:.3f}")
print(f"\n↯ Forgetting on Task A: {accA_before - accA_after:.3f}")

# Catastrophic Forgetting

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SaptarshiSarkar12/continual-learning/blob/main/catastrophic_forgetting/notebook.ipynb)

This demonstration illustrates the phenomenon of catastrophic forgetting in neural networks when trained sequentially on multiple tasks.

In this demo, we will train a CNN on two different tasks sequentially and observe how the performance on the first task degrades after training on the second task, which is a hallmark of catastrophic forgetting. We will use the MNIST dataset for the first task and the Fashion-MNIST dataset for the second task.
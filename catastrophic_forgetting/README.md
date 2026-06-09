# Catastrophic Forgetting

This demonstration illustrates the phenomenon of catastrophic forgetting in neural networks when trained sequentially on multiple tasks.

In this demo, we will train a Multilayer Perceptron (MLP) on two different tasks sequentially. The first task will be to classify **0, 1, 2, 3 and 4** digits from the MNIST dataset, and the second task will be to classify **5, 6, 7, 8 and 9** digits from the same dataset.

When we train the MLP on the first task, it learns to classify the digits 0-4. However, when we subsequently train the same MLP on the second task (digits 5-9), it tends to forget the knowledge it gained from the first task, resulting in a significant drop in performance on the first task. This is known as catastrophic forgetting.
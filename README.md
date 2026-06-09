# Continual Learning

This repository contains code for the demonstration of various concepts in continual learning.

## Installation

To install the required dependencies, you can use uv:

```bash
uv sync
```

## Usage

To run the demonstrations locally, there are two options:

### Running with uv

```bash
uv run <demo_name>/demo.py
```
Replace `<demo_name>` with the folder name of the specific demonstration you want to run.

### In Jupyter Notebook

You can also run the demonstrations in a Jupyter Notebook using locally running Jupyter server.

1. Install jupyter kernel for uv. This will allow the locally running Jupyter server to recognize the uv environment and use it as a kernel for running the notebooks:
   ```bash
   uv sync --dev
   uv run python -m ipykernel install --user --name=continual-learning --display-name "Continual Learning"
   ```
2. Start the JupyterLab server:
   ```bash
   uv run jupyter lab
   ```
3. Open the desired notebook from the JupyterLab interface and select the "Continual Learning" kernel to run the notebook.

## Demos

The repository includes the following demonstrations:

- [`Catastrophic Forgetting`](./catastrophic_forgetting): This demo illustrates the phenomenon of catastrophic forgetting in neural networks when trained sequentially on multiple tasks.

## Contributing

If you would like to contribute to this repository, please feel free to submit a pull request. We welcome contributions that improve the code, add new demonstrations, or enhance the documentation.
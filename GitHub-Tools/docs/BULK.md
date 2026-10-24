# Bulk Repository Management

These scripts exist to automate repository management, en massé. The goal is that you never have to touch the terminal when developing with Git.

## Scripts

### [`all-pull`](/shell/git/bulk/all-pull)

Automatically pulls the latest changes for all Git repositories in subdirectories, running updates concurrently and reporting success or failure for each.

#### Usage

Run the script from the parent directory containing your Git repos:

```bash
./all-pull
```

### [`all-push`](/shell/git/bulk/all-push)

Automatically stages, commits (with a default message), and pushes changes for all Git repositories in subdirectories. Runs operations concurrently and reports success or failure for each.

#### Usage

Run the script from the parent directory containing your Git repos:

```bash
./all-push
```

### [`all-status`](/shell/git/bulk/all-status)

Displays the current `git status` for all repositories in subdirectories, showing staged and unstaged changes for each.

#### Usage

Run the script from the parent directory containing your Git repos:

```bash
./all-status
```

## Installation

You can grab any one of the scripts into any folder simply by running:

```bash
wget https://github.nikoboi.dev/shell/*
```

> Fill in the path to the script. [github.nikoboi.dev](https://github.nikoboi.dev/) resolves to this repository.

Or run the automation setup script. Run anywhere (the script self-corrects using `$HOME`, `mkdir -p` and `cd`):

```bash
bash <(wget -qO- https://github.nikoboi.dev/shell/setup/automation)
```

The `automation` setup script also works as an update script.

> Will setup my entire automation workflow. See the [file tree](/README.md#file-tree) for details.

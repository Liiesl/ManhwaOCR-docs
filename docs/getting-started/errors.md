---
title: Troubleshooting
description: Find solutions to common errors and issues with the Manhwa OCR Tool.
order: 5
tags: docs
---

# Troubleshooting Common Errors

This page provides solutions for common issues you may encounter while installing or running the Manhwa OCR Tool.

## GUI Library Conflict: PySide6 vs. PyQt5

This is the most common issue for users running the application from source code.

#### Symptoms

When you launch the application using `python main.py`, it immediately shows an error dialog with the title "Dependency Error" and the message "Incorrect GUI Library Detected."

#### Cause

The Manhwa OCR Tool is built using the **PySide6** library for its graphical user interface. This error occurs if your Python environment has the conflicting **PyQt5** library installed. The two cannot coexist and the application is designed to safely exit instead of crashing.

#### Solution

The application displays a helpful error dialog that explains the problem. To fix this, you must uninstall `PyQt5` and install `PySide6`.

1.  The error dialog features a **"Copy Commands"** button. Click it to copy the required commands to your clipboard.
2.  Open your terminal or Command Prompt.
3.  Paste and run the commands:
    ```bash
    pip uninstall PyQt5
    pip install pyside6
    ```
4.  Once the commands have finished, try launching the application again with `python main.py`. It should now start correctly.
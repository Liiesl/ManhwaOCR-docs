---
title: The Home Window
description: An overview of the Manhwa OCR Tool's home window for creating, opening, and managing projects.
order: 4
tags: docs
---

# The Home Window

The Home Window is the first interactive screen you'll see after the application launches. It serves as your starting point for all project-related tasks.

<img src="/assets/images/home-window.png" alt="Manhwa OCR Tool Home Window" width="700">
*(Placeholder: Replace with actual screenshot of your Home Window)*

## Main Actions

The panel on the left provides the primary actions for managing your projects:

*   **New Project:** Creates a new project from a folder of images.
*   **Open Project:** Opens a previously saved project from a `.mmtl` file.
*   **Import from WFWF:** Imports a project from the external "What-If World Flow" (WFWF) format, useful for migrating from other tools.

## Recent Projects

The panel on the right displays a convenient list of your most recently opened projects. Simply double-click any entry to quickly reopen it and continue your work.

### Creating a New Project

1.  Click the **New Project** button.
2.  A dialog will open with several options:
    *   **Source:** Click "Folder" or "Image" to select the directory containing your image files (`.png`, `.jpg`, etc.) or a single image file.
    *   **Original Language:** Select the source language of the manhwa (e.g., Korean, Japanese, Chinese). This helps configure the OCR engine.
    *   **Project Location:** Click "Browse" to choose a location and name for your new project file.
3.  Click **Create** to save the project.

This process creates a single `.mmtl` file. This file is a self-contained archive that holds all your images, OCR data, edits, styles, and translations, making your project portable and easy to manage.

> **✨ Automatic File Sorting**
> Don't worry about messy filenames! The tool intelligently detects numbers in your image filenames and automatically sorts them in the correct numerical order when creating a project.
> For example, files named `p_010.jpg`, `page_1.png`, and `2.jpeg` will be correctly ordered as page 1, 2, and 10 in your project.

After creating or opening a project, you will be taken to the **Main Application Window**, your primary workspace. To learn about its features, continue to the **[User Manual](/user-manual/)**.

### Opening an Existing Project

1.  Click the **Open Project** button or double-click a project in the **Recent Projects** list.
2.  If you clicked "Open Project," a file dialog will appear. Navigate to your `.mmtl` project file and select it.
3.  A loading dialog will appear as the application extracts and verifies your project. It will then open in the **Main Application Window**, where you can pick up right where you left off.
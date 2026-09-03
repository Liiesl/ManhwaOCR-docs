---
layout: ../../layouts/BaseLayout.astro
title: The Home Window
description: An overview of the Easy Scanlate's home window for creating, opening, and managing projects.
order: 4
---

# The Home Window

The Home Window is the first screen you'll see after the app launches. It's your starting point for everything.

> TODO screenshot: new Home Window (left actions + right Recent list).

## Main Actions

The panel on the left has what you need most:

*   **New Project:** Creates a new project from a folder of images (or a single image).
*   **Open Project:** Opens a project you've saved before (a `.mmtl` file).
*   **Settings:** Opens the application settings.

## Recent Projects

The panel on the right shows projects you've opened before, most recent first. Just double-click one to jump back in where you left off.

### Creating a New Project

1.  Click the **New Project** button.
2.  A dialog opens with a few choices:
    *   **Source:** Click "Folder" to pick a folder of images (`.png`, `.jpg`, etc.) or "Image" for a single image.
    *   **Original Language:** Pick the language in your images (e.g., Korean, Japanese, Chinese). This helps the app read text correctly.
    *   **Project Location:** Click "Browse" to choose where to save your new project file.
3.  Click **Create** to save the project.

This creates a single `.mmtl` file. It's a self-contained file that holds your images, found text, edits, styles, and translations — easy to move or back up.

> **✨ Automatic File Sorting**
> Don't worry about messy filenames! The tool looks for numbers in your filenames and sorts them correctly.
> For example, files named `p_010.jpg`, `page_1.png`, and `2.jpeg` will be ordered as page 1, 2, and 10 in your project.

After creating or opening a project, you'll go to the **Main Application Window**, your primary workspace. To learn about it, continue to the **[User Manual](/user-manual/)**.

### Opening an Existing Project

1.  Click **Open Project** or double-click a project in **Recent Projects**.
2.  If you clicked "Open Project," pick your `.mmtl` file.
3.  The app loads your images and text, then opens the main workspace where you left off.

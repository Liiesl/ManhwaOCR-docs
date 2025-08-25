---
layout: ../../layouts/BaseLayout.astro
title: User Manual
description: A comprehensive guide to using the Manhwa OCR Tool's features for OCR, editing, and translation.
order: 1
---

# User Manual: Manhwa OCR Tool

Welcome to the official user manual for the Manhwa OCR Tool. This guide provides detailed instructions on how to use all features, from project management and OCR to advanced text styling and AI translation.

## Introduction

The Manhwa OCR Tool is a powerful desktop application designed to streamline the process of extracting, editing, and translating text from comic images (Manhwa, Manga, Webtoons). It provides a highly visual and interactive workspace where text boxes are overlaid directly on images, combined with a robust system for managing text versions and styles.

## Getting Started

If you are new to the tool, please refer to the [Getting Started](/getting-started/) guide, which covers:
*   [Installation](/getting-started/installation/)
*   [Launching the Application](/getting-started/launching-the-app/)
*   [The Home Window](/getting-started/the-home-window/) for creating and opening projects.

This manual will focus on the features available within the **Main Application Window**.

## The Main Application Window

Once a project is loaded, the Main Application Window becomes your primary workspace. It features a two-panel layout designed for an efficient workflow.

<img src="/assets/images/main-application-window.png" alt="Manhwa OCR Tool Main Application Window" width="900">
*(Placeholder: Replace with actual screenshot of your Main Application Window)*

### Left Panel (Image View)

The Image View displays your project's images sequentially. This is an interactive canvas where OCR-detected text boxes are rendered directly on the images.

*   **Navigation:** Use your mouse wheel or the scrollbar to move through the images.
*   **Text Box Interaction:**
    *   **Select:** Click a text box to select it. It will be highlighted with a blue frame, and its properties will load in the Right Panel.
    *   **Move:** Drag a selected text box to reposition it.
    *   **Resize:** Drag the handles on the corners and sides of a selected text box.
    *   **Rotate:** Drag the rotation handle (circular arrow) above a selected text box.
    *   **Perspective Transform:** Hold `Ctrl` while dragging a corner handle to apply perspective distortion.
*   **Overlay Controls:** A floating overlay at the bottom-center provides quick access buttons:
    *   **Scroll to Top/Bottom:** Instantly navigate to the beginning or end of your image list.
    *   **Action Menu (three bars icon):** Opens a menu for image manipulation tools like [Stitch](/user-manual/image-manipulation/#stitching-images) and [Split](/user-manual/image-manipulation/#splitting-images).
    *   **Save:** Quickly save your project progress.

<img src="/assets/images/image-view-with-controls.png" alt="Image View with Text Boxes and Overlay Controls" width="600">
*(Placeholder: Replace with actual screenshot of the Image View with selected text box and overlay buttons)*

### Right Panel (Control & Edit View)

The Right Panel contains all the tools for managing your project's data, text, and styles.

<img src="/assets/images/right-panel-overview.png" alt="Right Panel Overview" width="400">
*(Placeholder: Replace with actual screenshot of the Right Panel)*

*   **Top Controls:**
    *   **Settings (cog icon):** Opens the application [settings dialog](/user-manual/settings/).
    *   **Process OCR:** Starts the [batch OCR process](/user-manual/ocr-processing/#batch-ocr) for all images.
    *   **Stop OCR:** Stops an ongoing OCR process.
    *   **Manual OCR:** Toggles [Manual OCR mode](/user-manual/ocr-processing/#manual-ocr).
    *   **Profile Selector:** A dropdown menu to switch between different [text profiles](/user-manual/project-management/#managing-profiles).
    *   **Import/Export Menu (three bars icon):** Opens a menu for [importing and exporting data](/user-manual/import-export/).
*   **Main Widgets:**
    *   **Results Widget:** A table of all OCR text entries for detailed [editing and management](/user-manual/text-editing/).
    *   **Text Box Style Panel:** Appears when a text box is selected, providing detailed [styling options](/user-manual/text-box-styling/).
    *   **Find/Replace Widget:** A tool for searching and replacing text throughout your project.
*   **Bottom Controls:**
    *   **AI Translation:** Launches the [Gemini Translation window](/user-manual/ai-translation/).
    *   **Advanced Mode Checkbox:** Toggles advanced filtering and sorting options in the Results Widget.

### Menu Bar

The application menu bar at the top of the window provides access to all major functions.

*   **File:** Manage projects (`New`, `Open`, `Save (Ctrl+S)`), import/export data, and exit the application.
*   **Edit:** Access tools like `Find/Replace (Ctrl+F)`.
*   **Tools:** Access primary workflows like `Batch OCR`, `Manual OCR`, `Stitch/Split Images`, and `AI Translation`.
*   **View:** Toggle interface options like `Advanced Mode`.
*   **Settings (Ctrl+,):** Open the application settings.
*   **Help:** View application information and check for updates.
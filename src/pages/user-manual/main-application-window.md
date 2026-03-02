---
layout: ../../layouts/BaseLayout.astro
title: The Main Application Window
description: An overview of the main workspace, including the Image View, Control Panel, and Menu Bar.
order: 2
---

# The Main Application Window

Once a project is loaded, the Main Application Window becomes your primary workspace. It features a three-column layout designed for an efficient workflow.

<img src="/assets/Screenshot 2025-09-27 014312.png" alt="Easy Scanlate Main Application Window" width="700">

## Layout Overview

The main window is divided into three sections:
1. **Left Vertical Toolbar** - Quick access to tools and modes
2. **Center Panel (Image View)** - Displays project images with interactive text boxes
3. **Right Panel (Control & Edit View)** - OCR results, text styling, and translation tools

## Left Vertical Toolbar

A VS Code-style vertical toolbar on the far left provides quick access to primary tools:

*   **Settings (cog icon):** Opens the application [settings dialog](../settings/).
*   **Manual OCR:** Toggles [Manual OCR mode](../ocr-processing/#manual-ocr) for selecting specific regions to OCR.
*   **Toggle Text Visibility:** Show or hide all text boxes overlaid on the images.
*   **Context Fill Menu:** Access Context Fill options (Context Fill Mode, Edit Context Fills, Toggle Fill Visibility).
*   **Split Images:** Start the [image splitting](../image-manipulation/#splitting-images) workflow.
*   **Stitch Images:** Start the [image stitching](../image-manipulation/#stitching-images) workflow.

## Center Panel (Image View)

The Image View displays your project's images sequentially. This is an interactive canvas where OCR-detected text boxes are rendered directly on the images.

*   **Image Area**
    *   **Navigation:** Use your mouse wheel or the scrollbar to move through the images.
    *   **Text Box Interaction:**
        *   **Select:** Click a text box to select it. It will be highlighted with a blue frame, and its properties will load in the Right Panel.
        *   **Move:** Drag a selected text box to reposition it.
        *   **Resize:** Drag the handles on the corners and sides of a selected text box.
        *   **Rotate:** Drag the rotation handle (circular arrow) above a selected text box.
        *   **Perspective Transform:** Hold `Ctrl` while dragging a corner handle to apply perspective distortion.
    *   **Overlay Controls:** A floating overlay at the bottom-left provides quick access buttons:
        *   **Scroll to Top:** Instantly navigate to the beginning of your image list.
        *   **Save Menu:** Opens a menu with options to save the project (.mmtl) or save rendered images.
        *   **Scroll to Bottom:** Instantly navigate to the end of your image list.

<img src="/assets/images/image-view-with-controls.png" alt="Image View with Text Boxes and Overlay Controls" width="600">
*(Placeholder: Replace with actual screenshot of the Image View with selected text box and overlay buttons)*

## Right Panel (Control & Edit View)

The Right Panel contains all the tools for managing your project's data, text, and styles. It uses splitters to allow resizing of its components.

<img src="/assets/images/right-panel-overview.png" alt="Right Panel Overview" width="400">
*(Placeholder: Replace with actual screenshot of the Right Panel)*

*   **Top Controls:**
    *   **Process OCR / Stop OCR:** A combined toggle button that starts or stops the [batch OCR process](../ocr-processing/#batch-ocr). Includes a built-in progress indicator.
    *   **Profile Selector:** A dropdown menu to switch between different [text profiles](../project-management/#managing-profiles) (e.g., Original, User Edit 1, Translations).
    *   **Chat Toggle:** Show or hide the AI Translation chat widget.
    *   **Import/Export Menu (three bars icon):** Opens a menu for [importing and exporting data](../import-export/).

*   **Main Widgets:**
    *   **Text Box Style Panel:** Located at the top of the results area, providing detailed [styling options](../text-box-styling/) for the selected text box. Can be resized vertically.
    *   **Results Widget:** A table of all OCR text entries for detailed [editing and management](../text-editing/). Can be resized vertically relative to the style panel.
    *   **Translation Chat Widget:** An AI-powered [translation assistant](../ai-translation/) that can be shown/hidden via the chat toggle button. Appears to the right of the results widget when enabled.

## Menu Bar

The application menu bar at the top of the window provides access to all major functions.

*   **Files:** Manage projects (`New`, `Open`, `Import from WFWF`), import/export data, save projects (`Save`, `Save As`), and exit the application.
*   **Edit:** Access tools like `Find/Replace`.
*   **Process:** Access primary workflows like `Start/Stop OCR`, `Manual OCR Mode`, `Context Fill Mode`, `Edit Context Fills`, `Split Images`, and `Stitch Images`.
*   **View:** Toggle interface options including `Translation Chat`, `Profiles` submenu, `Toggle Text Visibility`, `Toggle Context Fill Visibility`, and `(Legacy) Advanced Mode`.

**Note:** Settings can be accessed via the Settings (cog) button in the left vertical toolbar.

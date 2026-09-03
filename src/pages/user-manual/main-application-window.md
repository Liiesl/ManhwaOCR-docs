---
layout: ../../layouts/BaseLayout.astro
title: The Main Application Window
description: An overview of the main workspace, including the Image View, Control Panel, and Menu Bar.
order: 2
---

# The Main Application Window

Once a project is open, the Main Application Window is where you'll spend most of your time. It's laid out so you can see your pages, read the found text, and fix things up without hunting around.

> TODO screenshot: new main window (left toolbar + center pages + right panel + tabs on top).

## Tabs and layout

*   **Tabs on top:** Home is always the first tab. Opening another `.mmtl` file opens a new tab, so you can switch between projects without closing anything.
*   **Three areas below:**
    1. **Left toolbar** — quick tools.
    2. **Center (Image View)** — your pages with text boxes on top.
    3. **Right panel** — find text, style it, and translate it.

## Left toolbar

Quick access to the tools you'll use a lot:

*   **Settings (cog icon):** Opens [settings](../settings/).
*   **Manual OCR:** Lets you draw a box around text the automatic run missed. You can select more than one area.
*   **Manual clean-up:** Paint over text to clean the background before placing new text.
*   **Show / hide text:** Hides the boxes so you can admire the art underneath.
*   **Split / Stitch:** [Combine or divide pages](../image-manipulation/).

## Center (Image View)

Your pages, top to bottom. The boxes on top are interactive:

*   **Select:** Click a box to select it. It gets a highlight frame, and its text and style load in the right panel.
*   **Move:** Drag a selected box to move it.
*   **Resize:** Drag the little handles on the corners and sides.
*   **Rotate:** Drag the round handle above the box.
*   **Fine-tune corners:** Hold `Ctrl` while dragging a corner for perspective tweaks.

Floating buttons help you get around long chapters:

*   **Jump to top / bottom** to zip through pages.
*   **Save menu** to save your project (`.mmtl`) or save finished images.

> TODO screenshot: Image View with a selected box + floating buttons.

## Right panel

Everything about your words lives here. You can resize the sections by dragging the dividers.

*   **Top controls:**
    *   **Start / Stop text detection:** Runs automatic text-finding on all pages, with progress. Press again to stop.
    *   **Profile picker:** Switch between versions of your text (e.g. Original, your edits, translations). See [Project Management](../project-management/).
    *   **Chat toggle:** Shows or hides the translation panel.
    *   **Import / Export menu:** For [moving text in and out](../import-export/).
*   **Main sections:**
    *   **Style panel:** How the selected box looks — fonts, colors, background, shape. See [Styling](../text-box-styling/).
    *   **Results list:** Every piece of found text, ready to [edit](../text-editing/).
    *   **Translation panel:** Pick a language, translate, and re-try just the lines you select. See [AI Translation](../ai-translation/).

> TODO screenshot: right panel with style + results + translation visible.

## Menu Bar

The menu at the top mirrors the buttons, in case you prefer menus or shortcuts:

*   **File:** `New`, `Open`, `Save`, `Save As`, import/export, and exit.
*   **Edit:** Helpers like find/replace when available.
*   **Process:** Start/stop text detection, manual select, clean-up, split and stitch.
*   **View:** Show/hide translation panel, profiles, and text overlays.

**Tip:** Settings lives in the left toolbar (cog) or `Ctrl+,`.

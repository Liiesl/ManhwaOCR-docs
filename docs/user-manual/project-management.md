---
title: Project Management
description: How to save your project and manage text profiles in the Manhwa OCR Tool.
order: 2
tags: docs
---

# Project Management

Effective project management is key to a smooth workflow. This involves regularly saving your progress and using `Profiles` to organize different versions of your text.

## Saving Your Project

It is crucial to save your work frequently. The tool operates on a temporary directory that is cleaned up when the application closes, so saving commits all your changes—including text edits, styling, and image manipulations—to your `.mmtl` project file.

*   **To Save:** Use `File > Save Project` from the menu, click the `Save` button in the Image View overlay, or press the `Ctrl+S` shortcut.
*   **To Save As:** Use `File > Save Project As...` to save your current work to a new `.mmtl` file, which is useful for creating backups or version checkpoints.

A notification will confirm that the project has been saved successfully.

## Managing Profiles

`Profiles` are a powerful feature that allows you to maintain multiple versions of your project's text side-by-side. This is essential for keeping your original OCR results, manual edits, and various translations separate and organized.

*   **Switching Profiles:** To switch between profiles, use the `Profile Selector` dropdown menu located at the top-right of the Main Application Window.

### Types of Profiles

*   **"Original" Profile:** This profile is automatically created and contains the raw, unmodified results from the [Batch OCR](/user-manual/ocr-processing/#1-batch-ocr) process. It is **read-only** to protect your source data.
*   **"User Edit" Profiles:** If you edit text or perform a [Manual OCR](/user-manual/ocr-processing/#2-manual-ocr) while the "Original" profile is active, the tool will automatically create a new profile (e.g., "User Edit 1") and switch to it. All your manual changes are saved to this new profile, leaving the "Original" untouched. You can create multiple "User Edit" profiles if needed.
*   **"Gemini Translation" Profiles:** These are created when you [apply translations](/user-manual/ai-translation/#4-applying-translations-to-your-project) from the AI Translation window. Each profile is typically named after the target language (e.g., "Gemini Translation (English)").

When you switch profiles, the text displayed in both the [Results Widget](/user-manual/text-editing/) and on the images in the [Image View](/user-manual/index/#left-panel-image-view) will instantly update to show the content of the selected profile.
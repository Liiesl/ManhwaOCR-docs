---
layout: ../../layouts/BaseLayout.astro
title: Project Management
description: How to save your project and manage text profiles in the Easy Scanlate.
order: 3
---

# Project Management

Effective project management is key to a smooth workflow. This involves regularly saving your progress and using `Profiles` to organize different versions of your text.

## Saving Your Project

It is crucial to save your work frequently. The tool operates on a temporary directory that is cleaned up when the application closes, so saving commits all your changes—including text edits, styling, and image manipulations—to your `.mmtl` project file.

*   **To Save:** Use `File > Save Project` from the menu, click the `Save` button in the Image View overlay, or press the `Ctrl+S` shortcut.
*   **To Save As:** Use `File > Save Project As...` to save your current work to a new `.mmtl` file, which is useful for creating backups or version checkpoints.

A notification will confirm that the project has been saved successfully.

## Project File Format

Easy Scanlate projects use the `.mmtl` file extension. These files are ZIP archives containing your project data:

| File | Purpose |
|------|---------|
| `images/` | Directory containing all your project images |
| `master.json` | OCR results and all profile translation data |
| `meta.json` | Project metadata (original language, active profile) |
| `inpaint/` | Directory containing context fill patch images (if any) |
| `inpaint.json` | Context fill record metadata (if any context fills exist) |

### master.json Structure

The `master.json` file contains an array of OCR results. Each result includes:

```json
{
  "row_number": 1,
  "filename": "page_01.jpg",
  "coordinates": [[x1, y1], [x2, y2], [x3, y3], [x4, y4]],
  "text": "Original OCR text",
  "confidence": 0.95,
  "translations": {
    "User Edit 1": "Edited text",
    "Gemini Translation (English)": "Translated text"
  }
}
```

Profile data is stored in the `translations` object within each OCR result.

## Managing Profiles

`Profiles` are a powerful feature that allows you to maintain multiple versions of your project's text side-by-side. This is essential for keeping your original OCR results, manual edits, and various translations separate and organized.

*   **Switching Profiles:** To switch between profiles, use the `Profile Selector` dropdown menu located at the top-right of the Main Application Window.

### How Profiles Work

Profiles are stored within each OCR result's `translations` dictionary in the `master.json` file. When you switch profiles, the application looks up the corresponding text for each OCR result in that profile's translation data.

### Types of Profiles

*   **"Original" Profile:** This profile is automatically created when you run [Batch OCR](/user-manual/ocr-processing/#1-batch-ocr). It contains the raw, unmodified OCR results. While you can view this profile, any edits you make will automatically create or switch to a "User Edit" profile to preserve the original data.

*   **"User Edit" Profiles:** When you edit text while the "Original" profile is active, the tool automatically routes your changes as follows:
    *   If a "User Edit N" profile already exists (e.g., "User Edit 1"), your edit will be applied to the first existing user edit profile and the UI will switch to it.
    *   If no user edit profile exists, the tool creates "User Edit 1" and switches to it automatically.
    *   All manual changes, including [Manual OCR](/user-manual/ocr-processing/#2-manual-ocr) results and text edits, are saved to the active user edit profile, leaving "Original" untouched.

*   **"Gemini Translation" Profiles:** These are created when you [apply translations](/user-manual/ai-translation/#4-applying-translations-to-your-project) from the AI Translation window. Each profile is typically named after the target language (e.g., "Gemini Translation (English)").

When you switch profiles, the text displayed in both the [Results Widget](/user-manual/text-editing/) and on the images in the [Image View](/user-manual/index/#left-panel-image-view) will instantly update to show the content of the selected profile.

### Profile Persistence

Your active profile selection is saved with the project. When you reopen a project, it will automatically restore the profile you were last using. If that profile no longer exists (e.g., was deleted), the project defaults to "Original".
---
title: Settings
description: Configure application preferences, OCR parameters, and Gemini API key in the Manhwa OCR Tool.
order: 9
tags: docs
---

# Settings

Access the application settings by clicking the `Settings` (cog icon) button in the Right Panel or by selecting `Settings (Ctrl+,)` from the menu bar. The settings dialog is organized into tabs for easy configuration.

<img src="/assets/images/settings-dialog.png" alt="Settings Dialog" width="500">
*(Placeholder: Replace with actual screenshot of Settings Dialog)*

## 1. OCR Parameters

These settings directly control the behavior of the OCR engine. Fine-tuning them can significantly impact performance and accuracy. For more details, see the [OCR Processing](/user-manual/ocr-processing/#3-ocr-parameters) page.

*   **Min / Max Text Height:** Filters detected text boxes based on their vertical pixel size.
    *   *Default: 40px / 100px*
*   **Min Confidence:** The minimum confidence score (from 0.0 to 1.0) an OCR result must have to be included.
    *   *Default: 0.2*
*   **Distance Threshold:** The maximum pixel distance for automatically merging nearby text boxes.
    *   *Default: 100px*
*   **OCR Batch Size:** The number of images to process in a single batch. Higher values are faster but use more memory.
    *   *Default: 8*
*   **OCR Decoder:** The text recognition algorithm used by EasyOCR. `beamsearch` is recommended.
    *   *Default: beamsearch*
*   **OCR Adjust Contrast:** A factor applied to image contrast before OCR. `0.0` disables it.
    *   *Default: 0.5*
*   **OCR Resize Threshold:** Downscales images wider than this pixel value before OCR to improve speed. Set to `0` to disable.
    *   *Default: 1024px*
*   **Use GPU:** Enables GPU acceleration for OCR (requires a CUDA-enabled NVIDIA GPU). This provides a major speed boost.

## 2. Gemini API

Configure your credentials for using the [AI Translation](/user-manual/ai-translation/) feature.

*   **Gemini API Key:** Your personal API key from [Google AI Studio](https://ai.google.dev/).
*   **Gemini Model:** The specific Gemini AI model to use for translations (e.g., `gemini-1.5-flash`).

## 3. Shortcuts

Customize keyboard shortcuts for common actions.

*   **Find/Replace Shortcut:** The key combination to open the [Find/Replace widget](/user-manual/text-editing/#5-findreplace-widget).
    *   *Default: Ctrl+F*
*   **Combine Rows Shortcut:** The key combination to open the [Combine Rows dialog](/user-manual/text-editing/#3-combining-rows).
    *   *Default: Ctrl+G*

## 4. Other

General application preferences.

*   **Show Delete Row Warning:** If checked, a confirmation dialog appears before you [delete a row](/user-manual/text-editing/#4-deleting-rows). Uncheck this to delete rows instantly.
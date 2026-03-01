---
layout: ../../layouts/BaseLayout.astro
title: Settings
description: Configure application preferences, OCR parameters, AI translation, and keyboard shortcuts in Easy Scanlate.
order: 10
---

# Settings

Access the application settings by clicking the `Settings` (cog icon) button in the left vertical toolbar or by selecting `Settings (Ctrl+,)` from the menu bar. The settings dialog is organized into tabs for easy configuration.

## 1. General

General application preferences and update settings.

*   **Show delete confirmation dialog:** If checked, a confirmation dialog appears before you [delete a row](/user-manual/text-editing/#4-deleting-rows). Uncheck this to delete rows instantly.
*   **Use GPU for OCR (if available):** Enables GPU acceleration for OCR (requires a CUDA-enabled NVIDIA GPU). This provides a major speed boost. Restart may be needed after changing this setting.
*   **Auto Context Fill on Batch OCR:** Automatically apply context fill during Batch OCR. Can improve text rendering but may slow processing.
*   **Auto-check for updates on startup:** Automatically check for new application versions when the app starts.

### Application Updates

This section displays the current application version and provides update controls:

*   **Check for Updates:** Manually check if a new version is available.
*   **Download Update:** Downloads the latest update when available.
*   **Restart & Update:** Restarts the application and applies the downloaded update.

*Note: Update functionality is only available for compiled versions of the application, not when running from source.*

### Quick Links

*   **Request a Feature:** Opens GitHub to submit a feature request.
*   **Read Documentation:** Opens the online documentation at [docs.easyscanlate.site](https://docs.easyscanlate.site/).

## 2. Appearance

Customize the application's visual appearance.

*   **Background Editor:** Adjust the animated aurora background colors and effects. Modify the color palette to match your preferences.

## 3. OCR Processing

These settings control the behavior of the OCR engine. Fine-tuning them can significantly impact performance and accuracy.

*   **Minimum Text Height:** Filters detected text boxes based on their minimum vertical pixel size.
    *   *Default: 40px*
*   **Maximum Text Height:** Filters detected text boxes based on their maximum vertical pixel size.
    *   *Default: 100px*
*   **Minimum Confidence:** The minimum confidence score (from 0.0 to 1.0) an OCR result must have to be included.
    *   *Default: 0.2*
*   **Merge Distance Threshold:** The maximum pixel distance for automatically merging nearby text boxes.
    *   *Default: 100px*
*   **OCR Adjust Contrast:** A factor applied to image contrast before OCR (0.0 to 1.0). Set to `0.0` to disable. May help or hurt depending on image quality.
    *   *Default: 0.5*
*   **OCR Resize Threshold (Max Width):** Downscales images wider than this pixel value before OCR to improve speed. Set to `0` to disable resizing.
    *   *Default: 1024px*

## 4. Translations

Configure your credentials for using the [AI Translation](/user-manual/ai-translation/) feature. Supports multiple translation providers.

### Provider Selection

*   **Provider:** Choose between `Gemini` (Google) or `Mistral` AI for translations.

### Gemini Settings

Used when Provider is set to `Gemini`.

*   **Gemini API Key:** Your personal API key from [Google AI Studio](https://ai.google.dev/).
*   **Gemini Model:** The specific Gemini AI model to use for translations:
    *   `gemini-2.5-flash` - 250 req/day (free tier)
    *   `gemini-2.5-pro` - 100 req/day (free tier)
    *   `gemini-2.5-flash-lite` - 1000 req/day (free tier)
    *   `gemini-2.0-flash` - 200 req/day (free tier)
    *   `gemini-2.0-flash-lite` - 200 req/day (free tier)
    *   `gemma-3-27b-it` - 14400 req/day
    *   `gemma-3n-e4b-it` - 14400 req/day

### Mistral Settings

Used when Provider is set to `Mistral`.

*   **Mistral API Key:** Your API key from [Mistral AI](https://mistral.ai/).
*   **Mistral Model:** The model to use for translations:
    *   `mistral-small-latest` - Fast, cost-effective
    *   `mistral-medium-latest` - Balanced performance
    *   `mistral-large-latest` - Most capable

### Target Language

*   **Target Language:** The language to translate text into. Options include:
    *   English, Japanese, Chinese (Simplified), Korean, Spanish, French, German, Bahasa Indonesia, Vietnamese, Thai, Russian, Portuguese

## 5. Keyboard Shortcuts

Customize keyboard shortcuts for common actions.

*   **Combine Rows Shortcut:** The key combination to open the [Combine Rows dialog](/user-manual/text-editing/#3-combining-rows).
    *   *Default: Ctrl+G*
*   **Find/Replace Shortcut:** The key combination to open the [Find/Replace widget](/user-manual/text-editing/#5-findreplace-widget).
    *   *Default: Ctrl+F*

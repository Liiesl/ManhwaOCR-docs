---
layout: ../../layouts/BaseLayout.astro
title: Troubleshooting & Glossary
description: Common issues, solutions, and key terminology for the Easy Scanlate.
order: 11
---

# Troubleshooting & Glossary

## Troubleshooting Common Issues

Here are solutions to some common problems you might encounter.

### "Incorrect GUI Library Detected" Error on Startup
*   **Problem:** This critical error occurs when running the application from source (`python main.py`) if you have `PyQt5` installed instead of the required `PySide6`.
*   **Solution:** Follow the specific instructions in the error message. Open your terminal or command prompt and run:
    ```bash
    pip uninstall PyQt5
    pip install pyside6
    ```
    Then, relaunch the application.

### OCR Fails to Start or Gives Errors
*   **Problem:** The OCR process fails to initialize or stops with an error.
*   **Solution:**
    *   **Internet Connection:** RapidOCR downloads language models on its first run. Ensure you have an active internet connection.
    *   **GPU Issues:** If `Use GPU` is checked in [Settings](/user-manual/settings/), ensure you have a CUDA-enabled NVIDIA GPU with correctly installed drivers. If you suspect issues, try unchecking `Use GPU` to force CPU mode, which is slower but more compatible.
    *   **Memory Errors:** If OCR fails on large projects, try reducing the `OCR Batch Size` in `Settings > OCR Parameters` to lower VRAM/RAM usage.
    *   **Restart:** A simple restart of the application can sometimes resolve temporary issues.
    *   **Coordinate Errors:** If you see warnings about "coordinate scaling error" or "coordinate conversion error", the OCR detected text but had issues calculating its position. Try re-running OCR on that specific image.

### "API Key Missing" Error for AI Translation
*   **Problem:** An error appears when you try to use the [AI Translation](/user-manual/ai-translation/) feature.
*   **Solution:** You must provide your personal API key. Go to `Settings (Ctrl+,) > API Settings`, select your preferred provider (Gemini or Mistral), paste your key into the field, and select a model. You can get a key from [Google AI Studio](https://ai.google.dev/) for Gemini or [Mistral AI](https://console.mistral.ai/) for Mistral.

### Translation API Errors
*   **Problem:** Translation fails with an API error message.
*   **Solution:**
    *   **Rate Limits:** Free tier API keys have daily request limits (e.g., Gemini-2.5-flash: 250 req/day). Wait before retrying or upgrade your API plan.
    *   **Invalid API Key:** Verify your API key is correct and hasn't expired.
    *   **Network Issues:** Check your internet connection. The app needs to connect to the provider's servers.
    *   **Model Availability:** Some models may not be available in your region. Try selecting a different model in Settings.

### Project Load Errors
*   **Problem:** Error when opening an MMTL file like "Failed to load project" or "The 'images' directory is missing".
*   **Solution:**
    *   **Corrupt File:** The MMTL file may be corrupted. Try opening a backup if available.
    *   **Manual Extraction:** MMTL files are ZIP archives. You can extract them manually to recover images and data.
    *   **Missing Images:** If the images directory was deleted from the project, the project cannot be opened properly.

### Import/Export Errors
*   **Problem:** Failed to import translation files or export rendered images.
*   **Solution:**
    *   **Invalid Format:** Ensure translation files follow the expected XML format with proper `<filename>` and `<row_number>` tags.
    *   **File Permissions:** Check that you have write permissions for the export location and read permissions for import files.
    *   **Disk Space:** Ensure sufficient disk space for exported images.

### Slow Performance or UI Lag
*   **Problem:** The application is slow, especially during OCR.
*   **Solution:**
    *   **Enable GPU:** The single biggest performance boost comes from enabling `Use GPU` in `Settings > OCR Parameters` (if you have a compatible NVIDIA GPU).
    *   **Adjust `OCR Resize Threshold`:** In `Settings`, ensuring this is enabled (e.g., set to `1024`) can significantly speed up processing for very large images by downscaling them before OCR.
    *   **Reduce `OCR Batch Size`:** A smaller batch size uses less memory and can prevent system slowdowns on machines with less VRAM or RAM.
    *   **System Resources:** Close other resource-intensive applications.
    *   **Auto Context Fill:** Disable "Auto Context Fill on Batch OCR" if enabled, as it can slow down processing.

### Update Errors
*   **Problem:** Update check fails or download fails.
*   **Solution:**
    *   **Script Mode:** Updates are disabled when running from source. Install the compiled version for auto-updates.
    *   **Network Timeout:** The update server may be slow. Try again later.
    *   **Manual Update:** Download the latest version from GitHub releases manually.

### Temporary Project Files Are Not Deleted
*   **Problem:** If the application crashes, temporary files from your project may be left behind.
*   **Solution:** You can safely delete these files manually. They are located in your system's temporary folder (e.g., on Windows, press `Win + R`, type `%TEMP%`, and look for folders named like `tmpXXXXXX`).

### Manual OCR Errors
*   **Problem:** Manual selection for OCR gives "Selection area is invalid or outside image bounds" error.
*   **Solution:** Ensure your selection rectangle is within the image boundaries and has a valid size (not too small).

## Glossary

*   **API Key:** A unique code that grants you access to a service like the Google Gemini API or Mistral AI API.
*   **Batch OCR:** The process of automatically running OCR on all images in a project at once.
*   **Context Fill:** The process of automatically filling in the background behind text boxes before rendering new text, useful for removing original text.
*   **Coordinates:** The pixel positions (x, y) that define where a text box is located on an image.
*   **Gemini:** A family of powerful AI models created by Google, used in this tool for translation.
*   **GPU Acceleration:** Using your graphics card (NVIDIA with CUDA) to speed up OCR processing.
*   **Image View:** The left panel in the Main Application Window where images and their text boxes are displayed. Also referred to as the Center Panel in some documentation.
*   **MMTL File (.mmtl):** The custom project file format for the Easy Scanlate. It's a zip archive containing all images, text data, profiles, and styles.
*   **Mistral:** An alternative AI provider to Gemini for translation, offering different models and rate limits.
*   **OCR (Optical Character Recognition):** The technology that converts text within images into machine-readable text.
*   **Profile:** A distinct version of the text for your project. Common profiles include "Original" (raw OCR), "User Edit" (your corrections), and translation profiles like "Gemini Translation" or "Mistral Translation".
*   **Provider:** The AI service used for translation (Gemini or Mistral).
*   **RapidOCR:** The open-source Optical Character Recognition library that powers the text extraction in this tool.
*   **Rendered Image:** A final output image where the text from a selected profile has been "burned" or drawn onto the original image.
*   **Results Widget:** The table in the Right Panel that lists all text entries for easy editing, sorting, and management.
*   **Row Number:** A unique identifier assigned to each text box in a project, used for tracking and importing/exporting translations.
*   **Splitting:** The process of dividing a single image horizontally into multiple, smaller images.
*   **Stitching:** The process of combining multiple images vertically into a single, longer image.
*   **VRAM (Video RAM):** The dedicated memory on a graphics card (GPU), which is heavily used during GPU-accelerated OCR.
*   **for-translate Format:** A custom XML format used for exporting clean text for external translation and re-importing it.

## Error Dialog Features

When an error occurs, the application displays a detailed error dialog with the following features:

*   **Copy Traceback:** Click to copy the full error details to your clipboard for sharing or debugging.
*   **Report Issue to GitHub:** Opens a pre-filled GitHub issue with system information, error details, and traceback automatically included.
*   **System Information:** Error reports include OS, architecture, app version, Python version, PySide6 version, and Git status (when running from source).

## Getting Help

If you encounter an issue not covered here:

1. Check the [GitHub Issues](https://github.com/Liiesl/EasyScanlate/issues) page for similar problems
2. Use the "Report Issue to GitHub" button in any error dialog to create a detailed bug report
3. Include steps to reproduce the issue and your system information

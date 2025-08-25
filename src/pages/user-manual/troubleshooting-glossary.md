---
layout: ../../layouts/BaseLayout.astro
title: Troubleshooting & Glossary
description: Common issues, solutions, and key terminology for the Manhwa OCR Tool.
order: 10
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
    *   **Internet Connection:** EasyOCR downloads language models on its first run. Ensure you have an active internet connection.
    *   **GPU Issues:** If `Use GPU` is checked in [Settings](/user-manual/settings/), ensure you have a CUDA-enabled NVIDIA GPU with correctly installed drivers. If you suspect issues, try unchecking `Use GPU` to force CPU mode, which is slower but more compatible.
    *   **Memory Errors:** If OCR fails on large projects, try reducing the `OCR Batch Size` in `Settings > OCR Parameters` to lower VRAM/RAM usage.
    *   **Restart:** A simple restart of the application can sometimes resolve temporary issues.

### "API Key Missing" Error for AI Translation
*   **Problem:** An error appears when you try to use the [AI Translation](/user-manual/ai-translation/) feature.
*   **Solution:** You must provide your personal Gemini API key. Go to `Settings (Ctrl+,) > Gemini API`, paste your key into the field, and select a model. You can get a key from [Google AI Studio](https://ai.google.dev/).

### Slow Performance or UI Lag
*   **Problem:** The application is slow, especially during OCR.
*   **Solution:**
    *   **Enable GPU:** The single biggest performance boost comes from enabling `Use GPU` in `Settings > OCR Parameters` (if you have a compatible NVIDIA GPU).
    *   **Adjust `OCR Resize Threshold`:** In `Settings`, ensuring this is enabled (e.g., set to `1024`) can significantly speed up processing for very large images by downscaling them before OCR.
    *   **Reduce `OCR Batch Size`:** A smaller batch size uses less memory and can prevent system slowdowns on machines with less VRAM or RAM.
    *   **System Resources:** Close other resource-intensive applications.

### Temporary Project Files Are Not Deleted
*   **Problem:** If the application crashes, temporary files from your project may be left behind.
*   **Solution:** You can safely delete these files manually. They are located in your system's temporary folder (e.g., on Windows, press `Win + R`, type `%TEMP%`, and look for folders named like `tmpXXXXXX`).

## Glossary

*   **API Key:** A unique code that grants you access to a service like the Google Gemini API.
*   **Batch OCR:** The process of automatically running OCR on all images in a project at once.
*   **EasyOCR:** The open-source Optical Character Recognition library that powers the text extraction in this tool.
*   **`for-translate` Markdown:** A custom `.md` format used for exporting clean text for external translation and re-importing it.
*   **Gemini:** A family of powerful AI models created by Google, used in this tool for translation.
*   **Image View:** The left panel in the Main Application Window where images and their text boxes are displayed.
*   **MMTL File (.mmtl):** The custom project file format for the Manhwa OCR Tool. It's a zip archive containing all images, text data, profiles, and styles.
*   **OCR (Optical Character Recognition):** The technology that converts text within images into machine-readable text.
*   **Profile:** A distinct version of the text for your project. Common profiles include "Original" (raw OCR), "User Edit" (your corrections), and "Gemini Translation" (AI translation).
*   **Rendered Image:** A final output image where the text from a selected profile has been "burned" or drawn onto the original image.
*   **Results Widget:** The table in the Right Panel that lists all text entries for easy editing, sorting, and management.
*   **Stitching:** The process of combining multiple images vertically into a single, longer image.
*   **Splitting:** The process of dividing a single image horizontally into multiple, smaller images.
*   **VRAM (Video RAM):** The dedicated memory on a graphics card (GPU), which is heavily used during GPU-accelerated OCR.
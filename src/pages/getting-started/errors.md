---
layout: ../../layouts/BaseLayout.astro
title: Troubleshooting
description: Find solutions to common errors and issues with EasyScanlate.
order: 5
---

# Troubleshooting Common Errors

This page provides solutions for common issues you may encounter while installing or running EasyScanlate.

## GUI Library Conflict: PySide6 vs. PyQt5

This is the most common issue for users running the application from source code.

#### Symptoms

When you launch the application using `python main.py`, it immediately shows an error dialog with the title "Dependency Error" and the message "Incorrect GUI Library Detected."

#### Cause

EasyScanlate is built using the **PySide6** library for its graphical user interface. This error occurs if your Python environment has the conflicting **PyQt5** library installed. The two cannot coexist and the application is designed to safely exit instead of crashing.

#### Solution

The application displays a helpful error dialog that explains the problem. To fix this, you must uninstall `PyQt5` and install `PySide6`.

1.  The error dialog features a **"Copy Commands"** button. Click it to copy the required commands to your clipboard.
2.  Open your terminal or Command Prompt.
3.  Paste and run the commands:
    ```bash
    pip uninstall PyQt5
    pip install pyside6
    ```
4.  Once the commands have finished, try launching the application again with `python main.py`. It should now start correctly.

---

## Missing Dependencies

#### Symptoms

The application fails to start with `ImportError` or `ModuleNotFoundError` messages in the console, such as:
- `ModuleNotFoundError: No module named 'PySide6'`
- `ModuleNotFoundError: No module named 'rapidocr'`
- `ModuleNotFoundError: No module named 'PIL'`

#### Cause

Required Python packages are not installed in your environment.

#### Solution

Install all required dependencies using the provided requirements file:

```bash
pip install -r requirements.txt
```

Key dependencies include:
- **PySide6** - GUI framework
- **rapidocr** - OCR engine for text recognition
- **pillow** - Image processing
- **numpy** - Numerical operations
- **opencv-python** - Computer vision operations
- **google-genai** or **neverliie-ai-sdk** - AI translation services
- **qtawesome** - Icon library

---

## Project Load Errors

### Missing Images Directory

#### Symptoms

Error message: "Failed to load project: The 'images' directory is missing in the project file."

#### Cause

The `.mmtl` project file is corrupted or was not created properly. The project file is a ZIP archive that must contain an `images/` folder.

#### Solution

- If the project was created by EasyScanlate, it may be corrupted. Try restoring from a backup.
- If manually creating a project, ensure the ZIP structure follows the format:
  ```
  project.mmtl (ZIP archive)
  ├── images/
  │   └── (your image files)
  ├── master.json
  └── meta.json
  ```

### Corrupted Project Files

#### Symptoms

Error messages when opening a project:
- "Failed to load project" with JSON-related errors
- Project opens but shows no images or OCR results
- Application crashes when loading specific projects

#### Cause

- `master.json` or `meta.json` files are corrupted or contain invalid JSON
- The `.mmtl` file is incomplete or was modified externally

#### Solution

1. Create a new project and re-import your images
2. If you have backups, restore from a working version
3. The project files are ZIP archives - you can extract and inspect `master.json` and `meta.json` for corruption

---

## OCR Errors

### OCR Initialization Error

#### Symptoms

Error dialog with "OCR Initialization Error" when trying to run OCR.

#### Cause

- The RapidOCR engine failed to initialize
- Missing or corrupted OCR model files
- Insufficient memory for OCR operations

#### Solution

1. Ensure all dependencies are installed: `pip install rapidocr numpy pillow`
2. Restart the application
3. If the error persists, try reducing the image size or adjusting the resize threshold in settings

### Manual OCR Error

#### Symptoms

Error when using the manual OCR selection feature: "Manual OCR Error" or "Selection area is invalid or outside image bounds."

#### Cause

- Selected area is too small or outside the image boundaries
- The OCR reader is not properly initialized

#### Solution

1. Ensure you have selected a valid area on the image (drag to create a selection)
2. The selection must be within the image boundaries
3. Try selecting a larger area with more visible text

---

## File I/O Errors

### Permission Denied

#### Symptoms

Error messages like:
- "Permission denied" when saving projects
- "Failed to save project" errors
- Cannot create or modify `.mmtl` files

#### Cause

- The application doesn't have write permissions to the target directory
- The file is open in another program
- Antivirus software is blocking file operations

#### Solution

1. Run the application with appropriate permissions (not as administrator unless necessary)
2. Ensure the target folder is not read-only
3. Check if the file is open in another application
4. Add an exception for EasyScanlate in your antivirus software
5. Try saving to a different location (e.g., your Documents folder)

### File Not Found

#### Symptoms

- "The project file could not be found" when opening from recent projects
- Missing image files referenced in a project

#### Cause

- The project file was moved or deleted
- Image files were moved after creating the project

#### Solution

1. Use File > Open to browse for the moved project file
2. If images are missing, re-import them into a new project
3. Recent projects list shows "Last opened" times - verify the file still exists at that location

---

## Context Fill Errors

#### Symptoms

Error dialog with "Context Fill Error" or failure to apply context fill.

#### Cause

- Failed to process image regions for context fill
- Memory issues with large images
- Invalid coordinates for context fill regions

#### Solution

1. Try again with a smaller selection area
2. Restart the application and retry
3. Ensure the image is not corrupted

---

## Import/Export Errors

#### Symptoms

- "Import Error" when importing translation files
- "Failed to apply translation" messages
- JSON parsing errors during import

#### Cause

- The imported file is not in the expected format
- JSON files are malformed
- Missing required fields in the import data

#### Solution

1. Ensure import files follow the correct JSON format:
   ```json
   {
     "filename.jpg": {
       "1": "Translated text for row 1",
       "2": "Translated text for row 2"
     }
   }
   ```
2. For master file imports, ensure the JSON is an array of OCR result objects
3. Validate your JSON using an online JSON validator before importing

---

## General Application Errors

### Unhandled Exceptions

#### Symptoms

An error dialog appears with "Unhandled Exception" showing a traceback.

#### Cause

Unexpected errors in the application code, often due to:
- Edge cases in user input
- Invalid data states
- Threading issues

#### Solution

1. Click "Copy Traceback" to copy the error details
2. Click "Report Issue to GitHub" to create a bug report with pre-filled details
3. Include steps to reproduce the error in your report
4. Restart the application and try again

### Application Startup Error

#### Symptoms

Critical error during application startup before the main window appears.

#### Cause

- Corrupted application settings
- Issues loading recent projects
- System configuration problems

#### Solution

1. Check the console/terminal for detailed error messages
2. Clear application settings (location varies by OS):
   - Windows: `%APPDATA%/Liiesl/EasyScanlate`
   - macOS: `~/Library/Preferences/Liiesl/EasyScanlate`
   - Linux: `~/.config/Liiesl/EasyScanlate`
3. Reinstall the application

---

## Getting Help

If you encounter an error not covered here:

1. **Copy the Traceback**: Use the "Copy Traceback" button in error dialogs to get detailed error information
2. **Report on GitHub**: Use the "Report Issue to GitHub" button to create a pre-filled issue
3. **Check Your Version**: Include your app version (shown in error reports) when seeking help
4. **Provide Steps to Reproduce**: Detail what you were doing when the error occurred

The error dialog automatically collects:
- Operating system and version
- Application version
- Python and PySide6 versions
- Full error traceback
- Git status (if running from source)

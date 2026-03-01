---
layout: ../../layouts/BaseLayout.astro
title: Import & Export
description: Learn how to import and export project data, OCR results, translations, and rendered images in the Easy Scanlate.
order: 9
---

# Import & Export

Easy Scanlate offers versatile import and export options, allowing you to integrate with other tools, share your work, or create final, translated images.

*   **Import/Export Menu** (bars icon): For OCR results and translation files
*   **Save Menu** (save icon): For saving projects and rendered images

## 1. Export OCR Results

This function exports your OCR text and associated metadata for archival purposes or use in other applications.

1.  Click the `Import/Export Menu` button (bars icon) in the right panel.
2.  Select `Export OCR Results`.
3.  In the export dialog, configure your options:
    *   **Master (JSON):** A comprehensive format containing all OCR data: text, coordinates, confidence scores, filenames, current profile translations, and custom styling. This is ideal for developers or for creating a complete backup.
        *   **Pretty Print:** Option to format JSON with indentation for readability
    *   **For-Translate (XML):** An XML format designed for AI translation. It includes text organized by filename with row number tags. You can choose the file extension (.xml or .txt) and select which profile's text to export.
4.  Choose a save location and provide a filename for your export.

## 2. Import Translation File

This feature allows you to import translated text from an external file back into your project. Supports XML, TXT (from For-Translate export), or Markdown formats (legacy).

1.  Click the `Import/Export Menu` button (bars icon) in the right panel.
2.  Select `Import Translation File`.
3.  In the import dialog:
    *   Click `Browse...` to select your translation file (.xml, .txt, or .md)
    *   Choose a profile option:
        *   **Create New Profile:** Enter a new profile name (defaults to filename)
        *   **Existing Profile:** Select an existing profile to overwrite
4.  Click `Import` to add the translations to your project.
5.  The imported text will be available in the [Profile Selector](/user-manual/project-management/#managing-profiles).

## 3. Export Rendered Images

This feature creates new image files with the text boxes from your selected profile rendered onto them. It's how you generate final, translated images for distribution.

1.  Click the `Save` button (save icon) in the overlay on the left side of the image view.
2.  Select `Save Rendered Images` from the menu.
3.  An export dialog will open with these options:
    *   **Output Directory:** Choose the folder where the new images will be saved.
    *   **Image Format:** Select the output format (`PNG`, `JPEG`, or `WebP`).
    *   **Quality:** (For JPEG/WebP) Adjust the image compression quality (1-100).
    *   **Profile:** Select which [text profile](/user-manual/project-management/#managing-profiles) to render on the images. The text and styling will be taken from this profile.
4.  Click `Export`. The application will process each image and save the rendered versions to your specified directory.
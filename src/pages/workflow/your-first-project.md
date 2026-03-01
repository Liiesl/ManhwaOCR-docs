---
layout: ../layouts/BaseLayout.astro
title: Your First Project
description: A complete step-by-step tutorial for creating, editing, and exporting your first Easy Scanlate project.
order: 2
---

# Your First Project

This tutorial guides you through your complete first project with Easy Scanlate, from installation to final exported images. By the end, you'll understand the core workflow and be ready to tackle larger projects.

## Prerequisites

Before starting, ensure you have:

*   **Easy Scanlate installed** via the Windows installer (see [Installation](/getting-started/installation/))
*   **Antivirus exclusion configured** (crucial - see installation guide)
*   **3-5 sample images** prepared in a folder (JPEG or PNG format)

> **No API Key Required**: This tutorial focuses on OCR and editing. AI translation is optional and covered at the end.

---

## Step 1: Launch and Create a Project

1.  Launch Easy Scanlate from your Start Menu
2.  Wait for the Splash Screen to complete initialization
3.  In the **Home Window**, click **"New Project"**
4.  Configure your project:
    *   **Source**: Click **"Folder"** and select the folder containing your sample images
    *   **Original Language**: Select the language in your images (e.g., Korean, Japanese, Chinese)
    *   **Project Location**: Click **"Browse"** and choose where to save your `.mmtl` file
5.  Click **"Create"**

The Main Application Window will open with your images loaded.

---

## Step 2: Run Batch OCR

Now we'll extract text from all images automatically.

1.  In the **Right Panel**, click the **"Process OCR"** button
2.  Watch the progress bar as images are processed
3.  Once complete, you'll see:
    *   Text boxes appear on the images in the **Image View**
    *   Extracted text appear in the **Results Widget** (right panel)

> **First-Time Setup**: On first OCR run, the application downloads RapidOCR models (~100MB). This only happens once.

### What to Expect

*   Most text should be detected automatically
*   Some text may be missed (small text, unusual fonts, or stylized text)
*   The detected text boxes are overlaid on your images

---

## Step 3: Review and Edit OCR Results

### Switch Between View Modes

The **Results Widget** has two viewing modes:

*   **Simple Mode** (default): Card-based view with large text editors
*   **Advanced Mode**: Table view with sortable columns and bulk selection

Toggle between them using the **"Advanced Mode"** checkbox at the bottom-right.

### Edit Text

1.  **In Simple Mode**: Click into any card's text area and type corrections
2.  **In Advanced Mode**: Double-click a **"Text"** cell to edit inline
3.  **On the Image**: Click a text box on the image to select it, then edit in the right panel

> **Profile Note**: When you first edit text, the application automatically creates a **"User Edit 1"** profile and switches to it, preserving your original OCR data in the "Original" profile.

### Handle Missed Text with Manual OCR

If Batch OCR missed some text:

1.  Click the **"Manual OCR"** toggle button in the left vertical toolbar
2.  Your cursor becomes a crosshair
3.  Click and drag on the image to draw a box around missed text
4.  Release to run OCR on that region
5.  The new result appears with a decimal row number (e.g., "1.1")
6.  Click **"Manual OCR"** again to exit manual mode

### Delete Unwanted Results

To remove misdetections (sound effects, page numbers, etc.):

1.  In **Simple Mode**: Click the red trash icon on the card
2.  In **Advanced Mode**: Click the trash icon in the Action column
3.  Confirm the deletion (check "Remember choice" to skip this in the future)

---

## Step 4: Style Your Text Boxes (Optional)

Before exporting, you can customize how text appears:

1.  Click any text box on the image to select it
2.  The **Text Box Style Panel** appears at the top of the Results Widget
3.  Adjust settings:
    *   **Font**: Choose from system fonts or custom fonts in `assets/fonts/`
    *   **Size**: Set font size or enable "Auto" for automatic fitting
    *   **Color**: Text color and outline/stroke
    *   **Background**: Fill color, gradient, or transparent
    *   **Shape**: Rectangle, rounded rectangle, ellipse, or speech bubble
4.  Changes apply in real-time to the selected text box

### Save Your Style as a Preset

1.  Configure a text box with your preferred style
2.  Click the **"+"** button in the **Presets** section
3.  The style is saved and can be applied to other text boxes instantly

---

## Step 5: Export Your Project

### Save the Project File

Regularly save your work:

1.  Press **Ctrl+S** or click the **Save** button (floppy disk icon) in the Image View overlay
2.  Select **"Save Project"**
3.  This updates your `.mmtl` file with all changes

### Export Rendered Images

To create final images with text burned onto them:

1.  Click the **Save** button in the Image View overlay
2.  Select **"Save Rendered Images"**
3.  Configure export options:
    *   **Output Directory**: Where to save the images
    *   **Image Format**: PNG, JPEG, or WebP
    *   **Quality**: For JPEG/WebP (1-100)
    *   **Profile**: Which text version to render (usually "User Edit 1")
4.  Click **Export**

Your translated images are now ready for use!

---

## Optional: AI Translation

If you want to translate your OCR text:

1.  Get an API key from [Mistral AI](https://console.mistral.ai/) (recommended) or [Google AI Studio](https://ai.google.dev/)
2.  Go to **Settings (Ctrl+,)** → **AI Translation** tab
3.  Select provider and enter your API key
4.  In the **Translation Chat** (right panel), select target language
5.  Click the translate button (paper plane icon) or press **Ctrl+Enter**
6.  A new profile is created with translated text (e.g., "Mistral Translation (English)")
7.  Switch to that profile in the Profile Selector to review/edit translations
8.  Export rendered images using the translation profile

---

## Next Steps

Congratulations! You've completed your first project. Now you can:

*   Explore **[Common Workflows](/workflow/common-workflows/)** for specific project types
*   Learn about **[Project Management](/user-manual/project-management/)** to organize larger projects
*   Dive into **[Text Box Styling](/user-manual/text-box-styling/)** for professional-looking results
*   Check the **[User Manual](/user-manual/)** for detailed feature documentation

---

## Quick Reference

| Action | Method |
|--------|--------|
| Save Project | `Ctrl+S` |
| Start Batch OCR | "Process OCR" button |
| Manual OCR Mode | "Manual OCR" toggle |
| Delete Row | Trash icon (Simple) or Action column (Advanced) |
| Open Settings | `Ctrl+,` or Settings (cog) button |
| Export Images | Save button → "Save Rendered Images" |
| Switch Profile | Profile Selector dropdown |

---
layout: ../../layouts/BaseLayout.astro
title: Common Workflows
description: Optimized workflows for specific project types and scenarios in Easy Scanlate.
order: 3
---

# Common Workflows

This guide provides optimized workflows for different types of projects and scenarios. Each workflow is tailored to specific needs, helping you work more efficiently.

---

## Webtoon Workflow

Webtoons (long vertical comics) require special handling due to their unique format.

### Preparation

*   Source images are typically long vertical strips
*   Each "chapter" may be split into multiple image files
*   Text flows top-to-bottom continuously

### Recommended Workflow

1.  **Import Images in Order**
    *   Ensure your image files are named sequentially (e.g., `chapter01_01.jpg`, `chapter01_02.jpg`)
    *   Easy Scanlate automatically sorts numerically-named files

2.  **Stitch Related Pages** (Optional)
    *   If a scene spans multiple files, use the **Stitch** tool:
    *   Click **"Stitch Images"** in the left toolbar
    *   Select images in reading order (top to bottom)
    *   Click **"Confirm Stitch"** to merge into one long image
    *   OCR results are automatically re-mapped

3.  **Run Batch OCR**
    *   Process all images at once
    *   Long images are automatically handled - OCR runs on sections

4.  **Split for Export** (If Needed)
    *   If you stitched images but need separate files for final output:
    *   Use the **Split** tool to divide at logical breakpoints
    *   Click **"Split Images"** in the left toolbar
    *   Select image and place split line at desired position

### Tips for Webtoons

*   **Stitch for OCR**: Combining pages before OCR can improve context for AI translation
*   **Split for Distribution**: Export as separate files for easier distribution
*   **Check Long Text Boxes**: Webtoon speech bubbles can span large areas - verify OCR caught all text

---

## Multi-Chapter Management

For projects spanning multiple chapters or volumes.

### Organization Strategy

**Option A: One Project Per Chapter**
*   Create separate `.mmtl` files for each chapter
*   Pros: Smaller files, faster loading, isolated if corruption occurs
*   Cons: More files to manage, profile/styles don't carry over

**Option B: Single Project with Multiple Chapters**
*   Import all chapter images into one project
*   Pros: Unified profiles and styles, easier global changes
*   Cons: Larger file size, slower operations

### Recommended Workflow (Option A)

1.  **Create Project Template**
    *   Set up one project with your preferred:
        *   OCR settings (text height, confidence)
        *   Default text box styles
        *   Custom fonts in `assets/fonts/`
    *   Save as `template.mmtl`

2.  **Duplicate for New Chapters**
    *   Open template project
    *   Use **File > Import Images** to replace with new chapter
    *   Save As to create `chapter_XX.mmtl`

3.  **Consistent Naming**
    *   Use chapter prefixes in profiles:
        *   "Ch1 - User Edit"
        *   "Ch1 - Translation"
    *   Makes merging chapters easier later

### Tips for Multi-Chapter Projects

*   **Backup Regularly**: Save versions at key milestones
*   **Document Styles**: Note font/size combinations used for consistency
*   **Export in Batches**: Process a few chapters at a time to manage workload

---

## Quick OCR Workflow

For when you just need text extraction without translation or styling.

### Use Cases

*   Extracting text for external translation tools
*   Creating searchable archives of comics
*   Quick text analysis or word counting

### Workflow

1.  **Create Project**
    *   New Project → Select images → Create

2.  **Run Batch OCR**
    *   Click "Process OCR"
    *   Wait for completion

3.  **Export OCR Results**
    *   Click the **Import/Export Menu** (bars icon)
    *   Select **"Export OCR Results"**
    *   Choose **Master (JSON)** format for complete data
    *   Or choose **For-Translate (XML)** for clean text export

4.  **Done**
    *   No editing or styling needed
    *   Export takes seconds

### Tips for Quick OCR

*   **Adjust OCR Settings First**: If text is missed, tweak settings before re-running
*   **Use XML Export**: Clean format for translators or external tools
*   **Skip Context Fill**: Disable "Auto Context Fill" in settings for faster processing

---

## Collaboration Workflow

Working with external translators who don't use Easy Scanlate.

### Workflow for Translator Collaboration

1.  **Prepare Source Images**
    *   Create project with original images
    *   Run Batch OCR

2.  **Export for Translation**
    *   Click **Import/Export Menu** → **"Export OCR Results"**
    *   Select **For-Translate (XML)** format
    *   Choose "Original" profile
    *   Save as `project_for_translate.xml`

3.  **Send to Translator**
    *   Provide XML file and optionally source images
    *   Translator edits text within `<row_number>` tags

4.  **Import Translations**
    *   Receive translated XML file
    *   Click **Import/Export Menu** → **"Import Translation File"**
    *   Select the translated file
    *   Choose **"Create New Profile"** and name it (e.g., "Translator A")

5.  **Review and Style**
    *   Switch to the translation profile
    *   Review translations in context on images
    *   Adjust text box styles as needed
    *   Export rendered images

### Tips for Collaboration

*   **Clear Instructions**: Tell translators to only edit text between tags, not XML structure
*   **Version Control**: Number translation rounds ("Translation v1", "Translation v2")
*   **Communication**: Mark unclear text in the "Original" profile for translator reference
*   **Quality Check**: Always review imported translations before final export

### Alternative: Screenshot Method

For translators without XML comfort:

1. Export rendered images with Original text
2. Translator marks up images with corrections
3. You manually input corrections into "User Edit" profile

---

## Quality-Focused Workflow

For projects where accuracy and polish are critical.

### Workflow

1.  **Pre-Processing**
    *   Clean source images if possible (noise reduction, straightening)
    *   Ensure good contrast between text and background

2.  **Initial OCR**
    *   Run Batch OCR with default settings
    *   Don't expect perfection - this is a first pass

3.  **Systematic Review**
    *   Go through images one by one
    *   In Advanced Mode, sort by Confidence column
    *   Review all low-confidence results first

4.  **Manual OCR Pass**
    *   Add missed text areas
    *   Focus on: small text, stylized fonts, text on busy backgrounds

5.  **Editing Phase**
    *   Correct all OCR errors
    *   Combine split text boxes (Ctrl+G) where needed
    *   Delete misdetections

6.  **Translation Phase**
    *   Use AI translation
    *   Review and edit all translated text
    *   Compare with Original profile for context

7.  **Styling Phase**
    *   Style one text box perfectly
    *   Save as Preset
    *   Apply preset to similar text boxes
    *   Fine-tune individual boxes as needed

8.  **Final Review**
    *   Switch through all profiles to verify
    *   Export test image and review at full resolution
    *   Make final adjustments

9.  **Export**
    *   Save project (Ctrl+S)
    *   Export rendered images in highest quality format (PNG)

### Tips for Quality Work

*   **Take Breaks**: OCR review is tiring - errors increase with fatigue
*   **Zoom In**: Check text boxes at full zoom to catch alignment issues
*   **Compare Side-by-Side**: Open original image in another viewer for reference
*   **Save Iterations**: Use "Save As" at major milestones

---

## Emergency Recovery Workflow

When things go wrong (corrupted file, accidental deletion, etc.).

### If Project Won't Open

1.  **Locate the .mmtl file**
2.  **Rename to .zip** and extract:
    ```
    project.mmtl → project.zip → extract
    ```
3.  **Check contents**:
    *   `images/` folder should contain your images
    *   `master.json` contains OCR data (can be opened in text editor)
    *   `meta.json` contains project settings
4.  **Create New Project** with same images
5.  **Manual Recovery**: Extract text from `master.json` and re-import

### If You Deleted Something Important

1.  **Check if saved**: If you haven't saved since deletion, close without saving and reopen
2.  **Check Original profile**: Deleted rows may still exist in "Original" profile
3.  **Re-run OCR**: For deleted OCR results, re-run batch or manual OCR

### Preventive Measures

*   Save frequently (Ctrl+S habit)
*   Use "Save As" to create checkpoints (e.g., `project_backup_v1.mmtl`)
*   Keep source images backed up separately
*   Export rendered images at milestones

---

## Summary Table

| Workflow | Best For | Key Features |
|----------|----------|--------------|
| Webtoon | Long vertical strips | Stitch/Split tools |
| Multi-Chapter | Series/volumes | Template projects, consistent naming |
| Quick OCR | Text extraction only | Fast export, minimal editing |
| Collaboration | External translators | XML export/import |
| Quality-Focused | Professional releases | Systematic review, styling |
| Emergency Recovery | Corrupted files | Manual extraction, backup strategies |

Choose the workflow that matches your project needs, or mix and match techniques from different workflows.

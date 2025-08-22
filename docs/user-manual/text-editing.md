---
title: Text Editing & Management
description: Detailed guide on editing, combining, deleting, and finding/replacing text in the Manhwa OCR Tool.
order: 4
tags: docs
---

# Text Editing & Management

The Manhwa OCR Tool provides a suite of features for refining your OCR results. All of these actions are primarily managed through the `Results Widget` in the Right Panel.

## 1. The Results Widget

The `Results Widget` is a powerful table that displays every text entry from your project. It is your central hub for reviewing and managing OCR data.

<img src="/assets/images/results-widget-basic.png" alt="Results Widget Basic Mode" width="400">
*(Placeholder: Replace with actual screenshot of Results Widget in Basic Mode)*

*   **Interaction:**
    *   **Select Row:** Clicking a row in the widget automatically highlights the corresponding text box on the image in the Left Panel and scrolls it into view.
    *   **Edit Text:** Double-click a row's "Text" cell to edit its content directly.
    *   **Right-Click Menu:** Access actions like `Combine Rows (Ctrl+G)` and `Delete Row`.

*   **Columns (Basic Mode):**
    *   **Row #:** A unique identifier for each text entry.
    *   **Filename:** The source image file.
    *   **Text:** The OCR-detected text (or its edited/translated version from the active profile).
    *   **Conf:** The confidence score (0.0-1.0) from the OCR engine.

*   **Columns (Advanced Mode):**
    *   **Edit:** Shows `Yes` if the text has been manually edited in the current [profile](/user-manual/project-management/#managing-profiles).
    *   **Manual:** Shows `Yes` if the text box was created using [Manual OCR](/user-manual/ocr-processing/#2-manual-ocr).
    *   **Deleted:** Shows `Yes` if the text box has been marked for deletion.

### Filtering and Sorting (Advanced Mode)

Enable `Advanced Mode` using the checkbox in the bottom-right corner to reveal powerful filtering and sorting tools. This helps you quickly find specific text entries in large projects.

<img src="/assets/images/results-widget-advanced.png" alt="Results Widget Advanced Mode" width="400">
*(Placeholder: Replace with actual screenshot of Results Widget in Advanced Mode)*

*   Filter by **Filename**, **Text** content, or **Confidence Range**.
*   Filter by status using the `Manual`, `Edited`, or `Deleted` checkboxes.
*   Sort by any column in `Ascending` or `Descending` order.

## 2. Editing Text

You can edit text in two ways:

1.  **Via the Results Widget:** Double-click the "Text" cell of a row, type your changes, and press `Enter` to confirm.
2.  **Via the Style Panel:** Select a text box on the image. The [Text Box Style Panel](/user-manual/text-box-styling/) will appear in the Right Panel, containing a text input field at the top where you can edit the content.

> **Important Note on Profiles:** When you edit text for the first time while the "Original" profile is active, the application automatically creates a new "User Edit 1" profile and switches to it. This preserves your raw OCR data in the "Original" profile. All subsequent edits will be saved to the active user profile. Learn more about [Managing Profiles](/user-manual/project-management/#managing-profiles).

## 3. Combining Rows

If OCR splits a single sentence into multiple text boxes, you can merge them into one logical entry.

1.  In the `Results Widget`, select the rows you want to combine. Use `Ctrl+Click` for non-sequential selection or `Shift+Click` for a range.
2.  Right-click and select `Combine Rows` or use the `Ctrl+G` shortcut.
3.  A dialog will appear showing the combined text. You can make final edits here.
4.  Click `Combine`. The first selected row will be updated with the merged text, and the other source rows will be marked as deleted.

## 4. Deleting Rows

To remove unwanted OCR results (e.g., misdetections or sound effects).

1.  In the `Results Widget`, select the row(s) you wish to remove.
2.  Right-click and select `Delete Row`.
3.  Confirm the deletion (this prompt can be disabled in [settings](/user-manual/settings/)). The row will be hidden and excluded from all exports.

## 5. Find/Replace Widget

This tool allows for efficient bulk text editing across the entire project for the active profile.

1.  Open the widget using `Edit > Find/Replace` or the `Ctrl+F` shortcut.
2.  **Find:** Enter the text string to search for.
3.  **Replace with:** Enter the replacement text.
4.  **Actions:**
    *   `Find Previous / Find Next`: Navigate between matches.
    *   `Replace`: Replaces the current, highlighted match.
    *   `Replace All`: Replaces all occurrences in the active profile. **Use with caution.**
5.  **Options:** Refine your search with `Case Sensitive`, `Whole Words Only`, or `Regular Expression`.

<img src="/assets/images/find-replace-widget.png" alt="Find/Replace Widget" width="300">
*(Placeholder: Replace with actual screenshot of Find/Replace Widget)*
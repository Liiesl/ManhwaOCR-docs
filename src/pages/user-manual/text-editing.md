---
layout: ../../layouts/BaseLayout.astro
title: Text Editing & Management
description: Detailed guide on editing, combining, deleting, and finding/replacing text in Easy Scanlate.
order: 5
---

# Text Editing & Management

Easy Scanlate provides a suite of features for refining your OCR results. All text editing is managed through the Results Panel on the right side of the application.

## 1. The Results Panel

The Results Panel offers two viewing modes, toggleable via the "Advanced Mode" checkbox at the bottom-right of the panel:

### Simple Mode (Default)

Simple Mode presents OCR results as a scrollable card-based interface. Each card contains:
- An auto-resizing text editor showing the OCR text
- A delete button (trash icon) to mark entries for deletion
- A sync button (placeholder for future functionality)

<img src="/assets/images/results-simple-mode.png" alt="Results Panel Simple Mode" width="400">
*(Placeholder: Replace with actual screenshot of Simple Mode)*

**Interactions:**
- **Edit Text:** Click into any text area and type your changes. The text area automatically expands to fit content.
- **Delete Row:** Click the red trash icon to mark the entry for deletion.
- **Select Row:** Clicking a row's text area highlights the corresponding text box on the image in the left panel and scrolls it into view.
- **Navigation:** Use mouse wheel or scrollbar to navigate through results. The panel features smooth animated scrolling.

### Advanced Mode

Advanced Mode displays results in a structured table with sortable columns and bulk selection capabilities.

<img src="/assets/images/results-advanced-mode.png" alt="Results Panel Advanced Mode" width="400">
*(Placeholder: Replace with actual screenshot of Advanced Mode)*

**Columns:**
- **Text:** The OCR-detected text (or edited version from the active profile). Editable via custom text editor delegate.
- **Confidence:** The confidence score (0.0-1.0) from the OCR engine.
- **Coordinates:** Bounding box coordinates of the text on the image.
- **File:** The source image filename.
- **Row Number:** A unique identifier for each text entry.
- **Action:** Delete button (trash icon) for each row.

**Interactions:**
- **Select Row:** Clicking a row highlights the corresponding text box on the image.
- **Edit Text:** Double-click the "Text" cell to open an inline text editor. Press outside the cell or use Ctrl+Enter to confirm.
- **Dynamic Column Resizing:** The column you click on automatically expands (stretches) while others shrink to fixed widths for better readability.
- **Delete Row:** Click the trash icon in the Action column.

## 2. Editing Text

You can edit text in multiple ways:

1. **Via Simple Mode:** Click into any card's text area and type your changes.
2. **Via Advanced Mode:** Double-click a "Text" cell to open the inline editor.
3. **Via the Image:** Select a text box directly on the image in the left panel. A text editor appears in the right panel where you can modify the content.

> **Important Note on Profiles:** When you edit text for the first time while the "Original" profile is active, the application automatically creates a new "User Edit 1" profile and switches to it. This preserves your raw OCR data in the "Original" profile. All subsequent edits are saved to the active profile. If you edit again later, the application routes your edits to the existing user edit profile rather than creating a new one. Learn more about [Managing Profiles](/user-manual/project-management/#managing-profiles).

## 3. Combining Rows

If OCR splits a single sentence into multiple text boxes, you can merge them into one logical entry.

1. In **Advanced Mode**, select the rows you want to combine. Use `Ctrl+Click` for non-sequential selection or `Shift+Click` for a range.
2. Right-click and select `Combine Rows` or use the `Ctrl+G` shortcut.
3. The system validates your selection:
   - Rows must be from the **same image file**
   - Rows must be **adjacent/contiguous** in sequence
   - Cannot combine manually added rows (floating-point row numbers)
4. If validation passes, the first selected row is updated with the merged text (joined by newlines), and the other source rows are marked as deleted.

> **Note:** Combining rows while in "Original" profile will create or use an existing "User Edit 1" profile, preserving the original OCR data.

## 4. Deleting Rows

To remove unwanted OCR results (e.g., misdetections or sound effects):

1. In **Simple Mode:** Click the red trash icon on any card.
2. In **Advanced Mode:** Click the trash icon in the Action column.
3. A confirmation dialog appears asking if you want to mark the entry for deletion. Check "Remember choice" to skip this warning in the future.
4. The row is hidden from view and excluded from all exports.

> **Note:** Deleted rows are marked with `is_deleted` flag and can be preserved in the project file, though they remain hidden from the UI.

## 5. Selection and Navigation

Easy Scanlate features a centralized selection system that keeps all views synchronized:

- **Cross-Panel Sync:** Selecting a text box on the image automatically selects the corresponding row in the Results Panel.
- **Reverse Sync:** Selecting a row in the Results Panel highlights the text box on the image and scrolls it into view.
- **Keyboard Navigation:** In Advanced Mode, use arrow keys to navigate between rows.
- **Smooth Scrolling:** The Simple Mode features animated smooth scrolling for better navigation experience.

## 6. Find and Replace (Currently Disabled)

> **Note:** The Find/Replace feature is implemented but currently disabled in the UI. The following describes the intended functionality:

The Find/Replace widget allows bulk text editing across the entire project for the active profile.

**Access:** (Feature disabled - was accessible via `Edit > Find/Replace` or `Ctrl+F`)

**Features:**
- **Find:** Enter text to search for across all OCR results.
- **Replace:** Enter replacement text.
- **Navigation:** `Find Previous` / `Find Next` buttons (or arrow buttons) to navigate between matches.
- **Actions:**
  - `Replace`: Replaces the current highlighted match.
  - `Replace All`: Replaces all occurrences in the active profile.
- **Options:**
  - `Match Case`: Case-sensitive search.
  - `Match Whole Word`: (Currently not implemented - UI disabled)
  - `Use Regular Expression`: (Currently not implemented - UI disabled)

**Search Behavior:**
- When in "Original" profile but a user edit profile exists, the search automatically looks in the user edit text to show matches in what will actually be replaced.
- Highlights are cleared and re-run when switching profiles.
- The widget integrates with both Simple and Advanced modes, scrolling to and selecting matches appropriately.

## 7. How Edits Are Saved to Profiles

Text edits are stored in the project's `master.json` file using a translation system:

- **Original Profile:** Edits cannot be made directly. Attempting to edit automatically creates or switches to a user edit profile.
- **User Edit Profiles:** Edits are stored in the `translations` field of each OCR result, keyed by profile name.
- **Revert to Original:** If you edit text back to exactly match the original OCR, the translation entry is automatically removed from the profile.
- **Smart Merging:** When routing from Original to an existing user edit, the system attempts to merge edits intelligently (preserving existing user edits while incorporating new changes).

Example data structure:
```json
{
  "row_number": 1,
  "text": "Original OCR text",
  "translations": {
    "User Edit 1": "Edited text",
    "Translation": "Translated text"
  }
}
```

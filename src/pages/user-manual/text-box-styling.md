---
layout: ../../layouts/BaseLayout.astro
title: Text Box Styling
description: Customize the appearance of OCR text boxes (shape, font, color) in the Manhwa OCR Tool.
order: 5
---

# Text Box Styling

When you select a text box in the Image View, the `Text Box Style Panel` appears in the Right Panel. This panel gives you granular control over the visual appearance of your text boxes, allowing you to match source styles or create entirely new designs for your translated text.

<img src="/assets/images/style-panel-overview.png" alt="Text Box Style Panel Overview" width="400">
*(Placeholder: Replace with actual screenshot of Style Panel with sub-panels expanded)*

The panel is organized into sections for `Shape`, `Typography`, and `Presets`.

## 1. Shape Style Panel

This section controls the text box container's background, border, and overall shape.

### Fill (Background)
*   **Fill Type:**
    *   `Solid`: Fills the background with a single **Fill Color**.
    *   `Linear Gradient`: Creates a smooth gradient between a **Start Color** and **End Color**. You can also adjust the **Midpoint** and **Direction** (e.g., `Horizontal`, `Vertical`).

### Stroke (Border)
*   **Width:** Sets the border thickness in pixels. A value of `0` means no border.
*   **Color:** Sets the color of the border.

### Shape
*   **Bubble Type:** Choose the overall shape of the text box.
    *   `Rectangle`: A standard rectangular box.
    *   `Rounded Rectangle`: A rectangle with adjustable rounded corners.
    *   `Ellipse`: An oval or circular shape.
    *   `Speech Bubble`: A rounded rectangle with a "tail" to indicate speech.
*   **Radius:** (For `Rounded Rectangle` and `Speech Bubble` only) Controls the roundness of the corners.

<img src="/assets/images/shape-panel-detail.png" alt="Shape Style Panel Detail" width="350">
*(Placeholder: Replace with actual screenshot of Shape Style Panel)*

## 2. Typography Style Panel

This section controls the appearance of the text itself within the box.

### Text Color
*   **Color Type:**
    *   `Solid`: Sets the text to a single, solid **Color**.
    *   `Linear Gradient`: Fills the text with a gradient, with the same controls as the background fill.

### Font
*   **Font Family:** Select from a dropdown of all fonts installed on your system, plus any custom fonts placed in the tool's `assets/fonts` directory.
*   **Font Style:** Choose a specific font weight or style (e.g., "Regular", "Bold", "Italic"), if available for the selected font family.
*   **Font Size:**
    *   **Size:** Manually set the font size in points.
    *   **Auto:** (Checkbox) When checked, the font size automatically adjusts to best fit the text box dimensions. This is very useful for preventing text overflow.
*   **Style Toggles:** Apply **Bold** or **Italic** formatting.
*   **Alignment:** Set the text alignment within the box: `Align Left`, `Align Center`, or `Align Right`.

<img src="/assets/images/typography-panel-detail.png" alt="Typography Style Panel Detail" width="350">
*(Placeholder: Replace with actual screenshot of Typography Style Panel)*

## 3. Presets

Presets allow you to save and quickly apply your favorite style combinations.

*   **Save Preset:** Click the `+` button to save the current text box's entire style as a new preset.
*   **Apply Preset:** Click on any saved preset to instantly apply its style to the currently selected text box.
*   **Manage Presets:** Right-click an existing preset to `Overwrite with current style` or `Delete preset`.

## 4. Apply and Reset Buttons

*   **Apply:** Applies all current settings from the panel to the selected text box, updating its visual appearance.
*   **Reset:** Reverts all style settings in the panel to their default values.
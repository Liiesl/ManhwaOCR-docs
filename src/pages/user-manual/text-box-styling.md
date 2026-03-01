---
layout: ../../layouts/BaseLayout.astro
title: Text Box Styling
description: Customize the appearance of OCR text boxes (shape, font, color) in the Easy Scanlate.
order: 6
---

# Text Box Styling

When you select a text box in the Image View, the `Text Box Style Panel` appears in the Right Panel. This panel gives you granular control over the visual appearance of your text boxes, allowing you to match source styles or create entirely new designs for your translated text.

<img src="/assets/images/style-panel-overview.png" alt="Text Box Style Panel Overview" width="400">
*(Placeholder: Replace with actual screenshot of Style Panel with sub-panels expanded)*

The panel is organized into two main sections: `Text Style` (left column) and `Shape Style` (right column), with `Presets` at the bottom.

---

## 1. Shape Style Panel

This section controls the text box container's background, border, and overall shape.

### Fill (Background)
*   **Fill Type:**
    *   `Solid`: Fills the background with a single **Fill Color**.
    *   `Linear Gradient`: Creates a smooth gradient between a **Start Color** and **End Color**.

**Gradient Controls** (when Linear Gradient is selected):
*   **Start Color:** The beginning color of the gradient.
*   **End Color:** The ending color of the gradient.
*   **Midpoint:** The balance point between the two colors (0-100%).
*   **Direction:** The angle of the gradient:
    *   `Horizontal (L>R)`: Left to right
    *   `Vertical (T>B)`: Top to bottom
    *   `Diagonal (TL>BR)`: Top-left to bottom-right
    *   `Diagonal (BL>TR)`: Bottom-left to top-right

### Stroke (Border)
*   **Width:** Sets the border thickness in pixels (0-99). A value of `0` means no border.
*   **Stroke:** Color picker for the border color.

### Bubble Shape
*   **Bubble Type:** Choose the overall shape of the text box.
    *   `Rectangle`: A standard rectangular box.
    *   `Rounded Rectangle`: A rectangle with adjustable rounded corners.
    *   `Ellipse`: An oval or circular shape.
    *   `Speech Bubble`: A polygon-shaped bubble with a tail for speech indication.
*   **Radius:** (For `Rounded Rectangle` only) Controls the roundness of the corners (0-100).

<img src="/assets/images/shape-panel-detail.png" alt="Shape Style Panel Detail" width="350">
*(Placeholder: Replace with actual screenshot of Shape Style Panel)*

**Default Shape Values:**
*   Bubble Type: `Rounded Rectangle`
*   Corner Radius: `50`
*   Border Width: `0` (no border)
*   Fill Type: `Solid` (white background)

---

## 2. Typography Style Panel

This section controls the appearance of the text itself within the box.

### Text Color
*   **Color Type:**
    *   `Solid`: Sets the text to a single, solid **Color**.
    *   `Linear Gradient`: Fills the text with a gradient (same gradient controls as background fill).

### Text Stroke (Outline)
Add an outline/stroke around each character for better readability:
*   **Width:** Stroke thickness in pixels (0-10). Default is `0` (no stroke).
*   **Stroke:** Color picker for the stroke color. Default is white (`#ffffffff`).

### Font Selection
*   **Font Family:** Select from a dropdown of:
    *   `Default (System Font)` - Routes to the AnimeAce font for comic/manga-style rendering
    *   All custom fonts placed in the `assets/fonts` directory
*   **Font Style:** When a custom font is selected, choose a specific style variant (e.g., "Regular") if available for that font family.

### Text Formatting
*   **Bold** (toggle button): Makes the text bold.
*   **Italic** (toggle button): Makes the text italic.

### Text Alignment
Click one of the three alignment buttons:
*   **Align Left** - Text aligns to the left edge of the box
*   **Align Center** - Text is centered horizontally (default)
*   **Align Right** - Text aligns to the right edge of the box

### Font Size
*   **Size:** Manually set the font size in points (6-200). Default is `22`.
*   **Auto:** (Checkbox) When checked (default), the font size automatically adjusts to best fit the text box dimensions. This is useful for preventing text overflow.

<img src="/assets/images/typography-panel-detail.png" alt="Typography Style Panel Detail" width="350">
*(Placeholder: Replace with actual screenshot of Typography Style Panel)*

**Default Text Values:**
*   Text Color: `Solid` (black)
*   Text Stroke Width: `0` (no stroke)
*   Font Size: `22`
*   Auto Font Size: `Enabled`
*   Text Alignment: `Center`

---

## 3. Presets

Presets allow you to save and quickly apply your favorite style combinations.

*   **Save Preset:** Click the `+` button to save the current text box's entire style as a new preset.
*   **Apply Preset:** Click on any saved preset thumbnail to instantly apply its style to the currently selected text box.
*   **Manage Presets:** Right-click an existing preset to:
    *   `Overwrite with current style` - Updates the preset with the current panel settings
    *   `Delete preset` - Removes the preset from the list

Presets store only the differences from the default style, making them efficient and portable.

---

## 4. How Styles Are Applied

Styles are applied in real-time as you adjust the controls. When you modify any setting:

1. The change is immediately reflected in the UI controls
2. The `style_changed` signal is emitted
3. The selected text box updates its appearance automatically

There is no separate "Apply" button - changes take effect instantly.

---

## 5. Style Inheritance

When a new text box is created, it uses the following inheritance hierarchy:

1. **Project defaults** - The application's built-in defaults
2. **Preset application** - If you apply a preset, those values override defaults
3. **Manual overrides** - Any changes you make in the panel override both

The default style dictionary includes:

```python
# Shape defaults
'bubble_type': 1              # Rounded Rectangle
'corner_radius': 50
'fill_type': 'solid'
'bg_color': '#ffffffff'       # White
'border_color': '#ff000000'   # Black
'border_width': 0             # No border

# Text defaults
'text_color_type': 'solid'
'text_color': '#ff000000'     # Black
'text_stroke_color': '#ffffffff'  # White
'text_stroke_width': 0
'font_family': 'Anime Ace'
'font_style': 'Regular'
'font_size': 22
'font_bold': False
'font_italic': False
'text_alignment': 1           # Center
'auto_font_size': True
```

---

## Summary of Styling Options

| Category | Option | Range/Values | Default |
|----------|--------|--------------|---------|
| **Fill** | Type | Solid, Linear Gradient | Solid |
| | Color | Any color | White (#ffffffff) |
| | Gradient Colors | Start, End | White to Light Gray |
| | Midpoint | 0-100% | 50% |
| | Direction | Horizontal, Vertical, 2 Diagonals | Horizontal (L>R) |
| **Border** | Width | 0-99 pixels | 0 |
| | Color | Any color | Black (#ff000000) |
| **Shape** | Type | Rectangle, Rounded Rect, Ellipse, Speech Bubble | Rounded Rectangle |
| | Radius | 0-100 | 50 |
| **Text Color** | Type | Solid, Linear Gradient | Solid |
| | Color | Any color | Black (#ff000000) |
| **Text Stroke** | Width | 0-10 pixels | 0 |
| | Color | Any color | White (#ffffffff) |
| **Font** | Family | System + assets/fonts | Default/System |
| | Style | Per-font variants | Regular |
| | Size | 6-200 points | 22 |
| | Bold | Toggle | False |
| | Italic | Toggle | False |
| | Auto-size | Checkbox | True |
| **Alignment** | Left/Center/Right | Buttons | Center |

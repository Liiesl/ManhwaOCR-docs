---
layout: ../../layouts/BaseLayout.astro
title: Text Box Styling
description: Customize the appearance of OCR text boxes (shape, font, color) in the Easy Scanlate.
order: 6
---

# Text Box Styling

Click any box on the page and the **Style panel** (top of the right side) lights up. Everything you change applies instantly — no Apply button needed.

> TODO screenshot: Style panel with Shape + Text sections open.

The panel has two halves — **Shape** (the bubble) and **Text** (the words) — plus **Presets** at the bottom to reuse looks.

---

## 1. Shape (the bubble)

### Fill (Background)
*   **Fill Type:**
    *   `Solid`: One flat **Fill Color**.
    *   `Linear Gradient`: A smooth blend from **Start Color** to **End Color**.

**Gradient controls** (when gradient is picked):
*   **Start / End Color**, **Midpoint** (balance, 0–100%), and **Direction** (left→right, top→bottom, or diagonal).

### Border
*   **Width:** Border thickness (0 = no border).
*   **Color:** Pick any color.

### Bubble Shape
*   **Type:** `Rectangle`, `Rounded Rectangle`, `Ellipse`, or `Speech Bubble`.
*   **Radius:** (Rounded Rectangle only) How round the corners are.

> TODO screenshot: shape section close-up.

**Out-of-the-box look:** Rounded bubble, white fill, no border.

---

## 2. Text (the words)

### Text Color
*   `Solid` for one color, or `Linear Gradient` for blended words (same controls as above).

### Outline (makes words pop)
*   **Width:** Thickness around each letter (0 = off). Try 1–3 for subtle, more for bold.
*   **Color:** White outline on dark words, dark outline on light words works well on busy art.

### Font
*   **Font Family:** A dropdown with the built-in comic fonts (Anime Ace + Augie) plus all the fonts installed on your computer. Just pick one — no copying files or restarting needed.
*   **Style:** If the font has variants (Regular / Bold / Italic...), pick one here.
*   **Bold / Italic buttons:** Quick toggles for emphasis. They look best when the font has real bold/italic versions.

### Alignment
**Left / Center / Right.** Center is the classic for speech bubbles; left suits narration boxes.

### Size
*   **Size:** 6–200. Default is 22.
*   **Auto (recommended, on by default):** Shrinks or grows the words to fit the box so nothing overflows.

> TODO screenshot: text section close-up.

**Out-of-the-box look:** Black words, centered, auto-sized, no outline.

---

## 3. Presets (save looks you love)

Presets are little style snapshots at the bottom of the panel. The app starts with a few handy ones plus empty slots.

*   **Apply:** Click a preset to dress the selected box in that style.
*   **Save:** Click `+` to save the current box's style as a new preset.
*   **Update / Delete:** Right-click a preset to overwrite it with the current style, or remove it.

**Tip for series:** Style one bubble perfectly, save it as "Main Dialogue", then click through similar boxes applying it. Consistency in seconds.

---

## 4. How new boxes get their style

1.  New boxes start from sensible defaults.
2.  If **auto style detection** is on (Settings → General), the app guesses a fitting style for each new box.
3.  Applying a preset overrides that.
4.  Anything you tweak by hand wins over everything.

Anything you tweak by hand overrides the rest.

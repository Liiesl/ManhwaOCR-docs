---
layout: ../../layouts/BaseLayout.astro
title: OCR Processing
description: Learn how to use batch and manual OCR, and configure OCR parameters in the Easy Scanlate.
order: 4
---

# Finding Text in Your Images

Easy Scanlate reads the text in your pages for you. Run it on everything at once, or just point at the bits it missed.

> TODO screenshot: Start button + progress + boxes appearing on pages.

## 1. Automatic detection (Batch)

The main way to get text out of all your pages:

1.  Open your project in the [Main Window](/user-manual/main-application-window/).
2.  Click **Start** (text detection) in the right panel's top controls.
3.  Watch the progress — you can press **Stop** any time.
4.  When it's done, boxes appear on your pages, and the words show up in the [results list](/user-manual/text-editing/).

**Nice touches that happen automatically (you can turn them off in Settings):**

*   **Bubble finding:** The app spots speech bubbles and can quietly drop stray detections outside them (like sound effects it mistook for dialogue).
*   **Style guessing:** New boxes can pick up a sensible look on their own.
*   **Background clean-up:** Boxes on plain or gradient bubbles get tidied behind the text so your new words sit cleanly.

## 2. Manual select

For the bits automatic mode missed, or got wrong:

1.  Click **Manual OCR** in the left toolbar. Your cursor becomes a crosshair, and a little "Manual OCR Mode" bar appears.
2.  Drag a box around the text you want to read. You can draw more than one.
3.  Release — the app reads just that spot.
4.  The new box appears on the page and in the results list, tucked between its neighbors in reading order.
5.  Click **Manual OCR** again (or close the mode bar) to go back to normal.

## 3. Settings you might actually touch

Find these in `Settings (Ctrl+,)` → text detection. Defaults work for most comics — tweak only if text is missed or you get junk boxes.

*   **Minimum / Maximum Text Height:** Ignores boxes smaller or taller than these pixel sizes. Handy for skipping tiny noise or giant titles. Default: 40px (min) / 100px (max).
*   **Minimum Confidence:** How sure the app must be to keep a result (0.0 to 1.0). Lower finds more (plus more mistakes). Default: 0.7.
*   **Merge nearby boxes:** How close two boxes must be to count as one line. Raise a little if sentences get split; lower if separate bubbles get glued together. Default: 0.5.
*   **Max image size:** Big images are gently shrunk before reading to stay fast. Lower = faster, but tiny text may suffer. Default: 2000px on the long side.
*   **Parallel workers:** How many pages are read at once. Default: 2. Lower it if your computer struggles.

And in `Settings` → `General`:

*   **Auto clean-up after detection:** Tidy behind new text automatically. Lovely results, slightly slower. Default: On.
*   **Ignore sound-effects outside bubbles:** Drop stray detections that aren't in bubbles. Default: On.

## 4. How it works (short version)

How it works: the app finds text areas, reads each one, then tidies up — filtering by size and confidence, joining bits that belong together, and sorting top to bottom.

**Tips:**

*   Try defaults first on 2–3 pages before changing settings.
*   Faint or dark pages? Try a cleaner source image — that beats any slider.
*   Still missing styled or tiny text? Add it with Manual select rather than cranking settings to extremes.

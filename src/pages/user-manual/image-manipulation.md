---
layout: ../../layouts/BaseLayout.astro
title: Image Manipulation
description: Learn how to stitch multiple image pages together or split single pages in the Easy Scanlate.
order: 7
---

# Image Manipulation: Stitching & Splitting

The Easy Scanlate provides powerful image manipulation features to help you organize your pages for optimal OCR and editing. These tools are accessed via the **Stitch** and **Split** buttons in the left vertical toolbar.

## Stitching Images

Use this feature to combine multiple vertical image pages into a single, longer image. This is ideal for webtoon panels that span multiple files or for recreating double-page spreads.

1.  Click the **Stitch** button (icon with joined rectangles) in the left vertical toolbar.
2.  The application will enter **Stitching Mode** and a control overlay appears at the top:
    *   Click on images to select them for stitching. Selected images will remain highlighted.
    *   Click images in the order you want them stitched (top to bottom).
    *   Click a selected image again to deselect it.
3.  Once you have selected two or more images, click the `Confirm Stitch` button in the overlay.
4.  The original images used in the stitch will be replaced by the new, single stitched image. Their associated OCR results and context fill data will be intelligently re-mapped to the new image coordinates.
5.  To exit **Stitching Mode** without saving, click the `Cancel` button.

<img src="/assets/images/stitching-mode.png" alt="Stitching Mode" width="600">
*(Placeholder: Replace with actual screenshot of Stitching Mode with images selected and controls visible)*

## Splitting Images

Use this feature to divide a single image page into multiple smaller pages. This is useful for breaking down a long webtoon strip into individual panels or splitting a scanned double-page spread into two separate pages.

1.  Click the **Split** button (icon with divided rectangle) in the left vertical toolbar.
2.  The application will enter **Splitting Mode** and a control overlay appears at the top:
    *   **Select Target Image:** Click on the image you want to split. It will become highlighted.
    *   **Place Split Indicator:** Click on the selected image where you want to create a horizontal split. A draggable line with a handle will appear.
    *   **Adjust Split Line:** Drag the handle up or down to precisely position the split line.
    *   **Clear Indicator:** Click the `Clear Indicator` button to remove the split line and select a different image.
3.  Once your split line is positioned correctly, click the `Confirm Split` button.
4.  After confirmation, the original image will be replaced by the new images created from the split (2 pieces maximum). Existing OCR results and context fill data will be automatically re-mapped to their respective new pages.
5.  To exit **Splitting Mode** without saving, click the `Cancel` button.

<img src="/assets/images/splitting-mode.png" alt="Splitting Mode" width="600">
*(Placeholder: Replace with actual screenshot of Splitting Mode with an image selected and split lines visible)*
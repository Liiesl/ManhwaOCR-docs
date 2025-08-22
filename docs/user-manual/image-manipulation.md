---
title: Image Manipulation
description: Learn how to stitch multiple image pages together or split single pages in the Manhwa OCR Tool.
order: 6
tags: docs
---

# Image Manipulation: Stitching & Splitting

The Manhwa OCR Tool provides powerful image manipulation features to help you organize your pages for optimal OCR and editing. These tools are accessed via the `Action Menu` (three bars icon) in the [Image View overlay](/user-manual/index/#left-panel-image-view).

## Stitching Images

Use this feature to combine multiple vertical image pages into a single, longer image. This is ideal for webtoon panels that span multiple files or for recreating double-page spreads.

1.  Click the `Action Menu` button in the Image View overlay.
2.  Select `Stitch Images`.
3.  The application will enter **Stitching Mode**:
    *   A translucent blue overlay will appear on all images, and your cursor will change to a pointing hand.
    *   **Select Images:** Click on the images you want to stitch together in the desired top-to-bottom order. Selected images will remain highlighted in blue.
    *   **Deselect:** To deselect an image, simply click it again.
4.  Once you have selected two or more images, click the `Stitch` button that appears in the bottom-left corner of the Image View.
5.  A dialog will prompt you to choose a filename and location for the new stitched image.
6.  After saving, the original images used in the stitch will be hidden from the project view and replaced by the new, single stitched image. Their associated OCR results will be intelligently re-mapped to the new image coordinates.
7.  To exit **Stitching Mode** without saving, click the `Cancel` button.

<img src="/assets/images/stitching-mode.png" alt="Stitching Mode" width="600">
*(Placeholder: Replace with actual screenshot of Stitching Mode with images selected and controls visible)*

## Splitting Images

Use this feature to divide a single image page into multiple smaller pages. This is useful for breaking down a long webtoon strip into individual panels or splitting a scanned double-page spread into two separate pages.

1.  Click the `Action Menu` button in the Image View overlay.
2.  Select `Split Image`.
3.  The application will enter **Splitting Mode**:
    *   A translucent red overlay will appear on all images, and your cursor will change to a crosshair.
    *   **Select Target Image:** Click on the single image you want to split. It will remain highlighted in red.
    *   **Add Split Lines:** Click on the selected image where you want to create a horizontal split. A blue draggable line with a circular handle will appear. You can add multiple split lines.
    *   **Adjust Split Lines:** Drag the circular handles up or down to precisely position the split lines.
    *   **Remove Split Lines:** To remove all lines from the selected image, click the `Clear Split Lines` (X icon) button in the bottom-left controls.
4.  Once your split lines are positioned correctly, click the `Split` button.
5.  After confirmation, the original image will be hidden from view and replaced by the new, smaller images created from the split. Existing OCR results will be automatically re-mapped to their respective new pages.
6.  To exit **Splitting Mode** without saving, click the `Cancel` button.

<img src="/assets/images/splitting-mode.png" alt="Splitting Mode" width="600">
*(Placeholder: Replace with actual screenshot of Splitting Mode with an image selected and split lines visible)*
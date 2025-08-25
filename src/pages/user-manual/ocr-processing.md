---
layout: ../../layouts/BaseLayout.astro
title: OCR Processing
description: Learn how to use batch and manual OCR, and configure OCR parameters in the Manhwa OCR Tool.
order: 3
---

# OCR Processing

The Manhwa OCR Tool uses a customized implementation of EasyOCR to detect and extract text from your images. You can run OCR on all images at once (Batch OCR) or on specific, user-defined areas (Manual OCR).

## 1. Batch OCR

This is the primary method for automatically extracting text from all images in your project.

1.  Load your project in the [Main Application Window](/user-manual/index/).
2.  Click the `Process OCR` button in the Right Panel's top controls.
3.  The `OCR Progress Bar` will show the status as images are processed.
4.  Once complete, detected text boxes will appear on the images in the Left Panel, and the extracted text will populate the [Results Widget](/user-manual/text-editing/#the-results-widget).

## 2. Manual OCR

Use Manual OCR to target specific areas that Batch OCR may have missed or to correct inaccurate detections.

1.  Click the `Manual OCR` toggle button in the Right Panel. Your cursor will change to a crosshair.
2.  In the Left Panel, click and drag to draw a rectangle around the text you want to extract.
3.  Release the mouse button. The tool will run OCR only on that selected region.
4.  The new result will appear as a text box on the image and as a new entry in the [Results Widget](/user-manual/text-editing/). If the "Original" profile is active, the tool will automatically create a new "User Edit" profile to store this manual entry, preserving your original batch results.
5.  Click the `Manual OCR` toggle button again to exit Manual OCR mode.

## 3. OCR Parameters

You can fine-tune the OCR engine's behavior in `Settings (Ctrl+,) > OCR Parameters`. Adjusting these settings can significantly improve accuracy and performance for your specific project.

*   **Minimum / Maximum Text Height:** Filters out text boxes based on their height in pixels. Useful for ignoring small, noisy text or large, non-dialogue text.
*   **Minimum Confidence:** Sets a threshold for OCR results. Only text with a confidence score equal to or higher than this value will be included. Lowering this may reveal more text but can also introduce more errors.
*   **Distance Threshold:** The maximum pixel distance between two text boxes for them to be considered for merging. A higher value can help combine fragmented text but may incorrectly merge separate blocks.
*   **Batch Size:** The number of images processed simultaneously. A larger batch size can speed up OCR on powerful GPUs but requires more VRAM. Reduce this value if you encounter out-of-memory errors.
*   **Decoder:** The text recognition algorithm used by EasyOCR. `beamsearch` is the default and generally provides a good balance of speed and accuracy.
*   **Adjust Contrast:** A pre-processing step that adjusts image contrast before sending it to the OCR engine. Can improve recognition on faint or dark images. A value of `0.0` disables this feature.
*   **Resize Threshold:** If an image's width exceeds this pixel value, it will be downscaled before processing. This can greatly speed up OCR on very large images but may reduce accuracy for very small text. Set to `0` to disable resizing.
*   **Use GPU:** (Checkbox) If checked, the application will use a compatible CUDA-enabled NVIDIA GPU for much faster processing. If unchecked, or if a compatible GPU is not found, the CPU will be used instead.
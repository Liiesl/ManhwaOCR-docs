---
layout: ../../layouts/BaseLayout.astro
title: OCR Processing
description: Learn how to use batch and manual OCR, and configure OCR parameters in the Easy Scanlate.
order: 4
---

# OCR Processing

The Easy Scanlate uses **RapidOCR** (based on PP-OCRv5) with separate Detection and Recognition engines to detect and extract text from your images. The engine uses ONNX Runtime for cross-platform compatibility. You can run OCR on all images at once (Batch OCR) or on specific, user-defined areas (Manual OCR).

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
4.  The new result will appear as a text box on the image and as a new entry in the [Results Widget](/user-manual/text-editing/). Manual OCR results are marked with the `is_manual` flag and assigned floating-point row numbers (e.g., `1.1`, `2.1`) to insert them between existing batch results based on their vertical position.
5.  Click the `Manual OCR` toggle button again to exit Manual OCR mode.

## 3. OCR Parameters

You can fine-tune the OCR engine's behavior in `Settings (Ctrl+,) > OCR Processing`. Adjusting these settings can significantly improve accuracy and performance for your specific project.

*   **Minimum / Maximum Text Height:** Filters out text boxes based on their height in pixels. Useful for ignoring small, noisy text or large, non-dialogue text. Default: 40px (min) / 100px (max).
*   **Minimum Confidence:** Sets a threshold for OCR results (0.0 to 1.0). Only text with a confidence score equal to or higher than this value will be included. Lowering this may reveal more text but can also introduce more errors. Default: 0.2.
*   **Merge Distance Threshold:** The maximum pixel distance between two text boxes for them to be considered for merging. A higher value can help combine fragmented text but may incorrectly merge separate blocks. Default: 100 pixels.
*   **OCR Adjust Contrast:** A pre-processing step that adjusts image contrast before sending it to the OCR engine. Can improve recognition on faint or dark images. The value is added to 1.0 to create an enhancement factor (e.g., 0.5 becomes 1.5x contrast). Set to `0.0` to disable. Default: 0.5.
*   **OCR Resize Threshold (Max Width):** If an image's width exceeds this pixel value, it will be downscaled before processing. This can greatly speed up OCR on very large images but may reduce accuracy for very small text. Set to `0` to disable resizing. Default: 1024 pixels.

Additionally, in `Settings > General`:
*   **Auto Context Fill on Batch OCR:** If checked, the application will automatically apply context fill to detected text regions during Batch OCR and apply a transparent background style to results. This prepares images for text rendering but may slow down processing. Default: Off.

## 4. OCR Result Structure

Each OCR result is stored as a dictionary with the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `row_number` | int or float | Unique identifier for ordering. Batch OCR uses integers (1, 2, 3...). Manual OCR uses floats (1.1, 2.1...) to insert between existing results. |
| `coordinates` | List[[x, y]] | Four corner points of the text bounding box: `[[x1,y1], [x2,y2], [x3,y3], [x4,y4]]`. |
| `text` | str | The extracted text content. |
| `confidence` | float | OCR confidence score (0.0 to 1.0). |
| `filename` | str | The source image filename. |
| `is_manual` | bool | `True` if added via Manual OCR, `False` if from Batch OCR. |
| `translations` | dict | Stores translated versions of the text, keyed by profile name. |
| `custom_style` | dict (optional) | Applied when Auto Context Fill is enabled, sets transparent background (`{'bg_color': '#00000000'}`). |

Results are sorted vertically (top-to-bottom) based on the minimum y-coordinate of their bounding boxes.

## 5. OCR Processing Pipeline

The OCR engine follows this pipeline for each image:

1. **Image Preprocessing**
   - Convert to RGB mode if needed
   - Apply contrast enhancement if enabled (`ocr_adjust_contrast`)
   - Resize if image width exceeds threshold (`ocr_resize_threshold`)

2. **Detection Phase**
   - Uses PP-OCRv5 Mobile Detection model (`ch_PP-OCRv5_mobile_det.onnx`)
   - Detects text regions in the image

3. **Recognition Phase**
   - Each detected region is cropped using perspective transformation
   - Uses Korean PP-OCRv5 Recognition model (`korean_PP-OCRv5_rec_mobile_infer.onnx`)
   - Korean dictionary (`korean_dict.txt`) for text recognition

4. **Post-Processing**
   - Scale coordinates back to original image dimensions (if resized)
   - Filter results by text height and confidence thresholds
   - Merge nearby text boxes based on distance threshold
   - Sort results vertically (top-to-bottom)
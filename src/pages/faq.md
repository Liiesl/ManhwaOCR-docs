---
layout: ../layouts/BaseLayout.astro
title: FAQ
description: Frequently asked questions about Easy Scanlate.
order: 2
---

# Frequently Asked Questions

Got questions? We've got answers. Here are some common things people ask about Easy Scanlate.

## General

### **Is Easy Scanlate free?**

Yep, it's completely free! Easy Scanlate is an open-source project. If you're curious, you can check out the source code on [GitHub](https://github.com/Liiesl/EasyScanlate).

### **What operating systems does it work on?**

Currently, there are installers available for Windows 10 and 11. If you're on a Mac or Linux, you'll need to run it from the source code.

## Troubleshooting

### **Q: The app won't open. What do I do?**

First, a fresh install usually fixes things. Try uninstalling and then reinstalling the app. Before you run it for the first time, make sure to add the installation folder to your antivirus's exclusion list. You can find a step-by-step guide on how to do that right here: [Installation](/getting-started/installation#crucial-step-add-antivirus-exclusion-before-first-launch).

If you're still having trouble, please let us know by opening an issue on our [GitHub page](https://github.com/Liiesl/EasyScanlate/issues).

### **Q: Why isn't some of the text being detected?**

This can happen when the default settings aren't a perfect match for the comic you're working on. While the standard settings work for most comics, some have unique layouts or text styles.

To fix this, you may need to tweak the [OCR Settings](/user-manual/settings/#ocr-processing) to better match the style of your comic, or use [Manual OCR](/user-manual/ocr-processing/#manual-ocr) to select specific text areas.

### **Q: Can I use AI translation without a Google account?**

Yes! Easy Scanlate now supports both **Google Gemini** and **Mistral AI** providers.

**Mistral AI (Recommended):**
*   **Limit:** 1 billion tokens per month on the free tier
*   **Note:** Requires phone number verification during signup
*   Get your key from [Mistral AI Console](https://console.mistral.ai/)

**Google Gemini:**
*   **Limit:** 20 requests per model per day on the free tier
*   Get your key from [Google AI Studio](https://ai.google.dev/)

Mistral is recommended for larger projects due to its significantly higher rate limit.

### **Q: What's the difference between profiles?**

Profiles are different versions of your text. The **Original** profile contains the raw OCR text (read-only). When you edit text, it automatically creates or uses a **User Edit** profile. You can also create profiles from AI translations. This lets you compare different versions and choose the best one when exporting.

### **Q: How do I save my translated images?**

Click the **Save** button (floppy disk icon) in the overlay on the left side of the image view, then select "Save Rendered Images". Choose your output format (PNG, JPEG, or WebP) and which profile's text to render. The images will be saved with the translated text burned onto them.

### **Q: The text boxes don't look right on the images. How do I fix this?**

Use the [Text Box Styling panel](/user-manual/text-box-styling/) on the right side of the window. You can adjust fonts, colors, text stroke (outline), background fill, and even bubble shapes. Changes apply in real-time, so you can see the result immediately.

### **Q: Can I combine multiple pages into one long image?**

Yes! Use the **Stitch** button in the left vertical toolbar. Click on multiple images in the order you want them combined, then click "Confirm Stitch". This is great for webtoon-style comics.

### **Q: Where are my projects saved?**

Easy Scanlate uses **.mmtl files** (which are actually ZIP archives) to store projects. Each project contains the images, OCR results, profiles, and settings. You can find your recent projects on the Home Window, or open the .mmtl file directly from your file explorer.
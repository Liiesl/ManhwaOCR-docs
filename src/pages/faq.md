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

Yep, it's completely free! Easy Scanlate is an open-source project. If you're curious, you can check out the code on [GitHub](https://github.com/Liiesl/EasyScanlate).

### **What computers does it work on?**

There are easy installers for **Windows 10 and 11**. On Mac or Linux, build it from source (see [Installation](/getting-started/installation/)). Once running, everything works the same.

### **Do I need an AI key to use it?**

Nope. Finding and editing text works with no key at all. You only need a key if you want built-in AI translation — and you can add that later from Settings.

## First run

### **Q: The app won't open. What do I do?**

First, a fresh install usually fixes things. Reinstall, and *before* first launch add the app folder to your antivirus exclusions. Step-by-step here: [Installation](/getting-started/installation#crucial-step-add-antivirus-exclusion-before-first-launch).

Still stuck? Tell us via [GitHub issues](https://github.com/Liiesl/EasyScanlate/issues).

### **Q: It asks to download things on first run?**

Yes — the welcome wizard fetches what the app needs (finding text, bubbles, styles, clean-ups). It shows progress, resumes if interrupted, and only happens once. There's a Retry button if anything fails.

## Reading text

### **Q: Why isn't some text found?**

Defaults fit most comics, but artsy layouts, tiny print, or wild fonts may need help.

Try tweaking [detection settings](/user-manual/settings/) a little, or use [Manual select](/user-manual/ocr-processing/) to draw a box around missed words.

### **Q: It found sound effects I don't want?**

Turn on **Ignore sound-effects outside bubbles** in Settings (on by default), or just trash those rows. Your Original stays safe underneath.

## Translation

### **Q: Can I translate without a Google account?**

Yes! There are lots of built-in services, not just Google.

*   **Easiest to try:** Marked in Settings — free models to test, no credit card to start.
*   **Best quality in our tests:** Also has a free tier, no credit card needed. Free tiers can be busy, so retries are normal.
*   Plus OpenAI, Anthropic, Mistral, and more — or run your own locally (Ollama / vLLM / llama.cpp) with no key.

Get your key from your chosen provider's site, paste it in `Settings` → `Translation`, pick a model, and go. Limits and prices depend on the provider — check their site for what's current.

### **Q: What's the difference between profiles?**

Profiles are versions of your words. **Original** is the raw found text (kept safe). Editing makes/uses a **User Edit** profile. Translating makes profiles like "Mistral Translation (English)". Switch with the picker to compare, and export with the one you want baked onto pictures.

## Saving & files

### **Q: How do I save my finished pictures?**

Click **Save** over the pages → **Save Rendered Images**. Pick where, which format (PNG / JPEG / WebP + quality), and which profile's words to draw. See [Import & Export](/user-manual/import-export/).

### **Q: The boxes look off. How do I fix them?**

Click a box and use the [Style panel](/user-manual/text-box-styling/) on the right — font, size (leave Auto on!), colors, outline, background, bubble shape. It updates live. Save looks you love as **Presets** to reuse in one click.

### **Q: Can I join pages into one long strip?**

Yes! **Stitch** in the left toolbar: click pages top to bottom → Confirm. Great for webtoons. **Split** does the reverse. See [Image Manipulation](/user-manual/image-manipulation/).

### **Q: Where are my projects?**

Everything lives in **one `.mmtl` file** per project — images, words, versions, styles. Recent ones are on Home. Double-click any `.mmtl` in your files to open it (it opens a new tab if the app's already open). Back them up like any precious file.

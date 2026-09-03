---
layout: ../../layouts/BaseLayout.astro
title: Settings
description: Configure application preferences, OCR parameters, AI translation, and keyboard shortcuts in Easy Scanlate.
order: 10
---

# Settings

Open settings with the **cog icon** in the left toolbar, or `Ctrl+,`. It's organized into tabs. Most defaults are fine — change things only if you have a reason.

> TODO screenshot: Settings dialog with tabs visible.

## 1. General

Everyday preferences and updates.

*   **Confirm before deleting:** Show a "are you sure?" before removing text. Turn off to delete instantly.
*   **Auto-detect style for new text:** Let the app guess a fitting look for each new box. Default: On (recommended).
*   **Auto clean-up after detection:** Tidy the background behind new text so your words sit cleanly. Default: On. Turn off for raw speed while testing.
*   **Ignore sound-effects outside bubbles:** Quietly drop stray detections that aren't inside bubbles. Default: On.
*   **Which clean-up to use automatically:** `Auto (recommended)` picks the right method per bubble. `Fast` is instant, `Best quality` is slower but nicer on tricky art (downloads once).
*   **Appearance:** Tweak the animated background color and feel. Just for fun — doesn't affect your pages.
*   **Text size of the app itself:** Makes buttons and lists bigger/smaller, like a zoom for the interface.
*   **Replay onboarding:** Re-opens the first-run wizard (handy to re-fetch models or change early choices).

### Updates

Shows your current version:

*   **Check for Updates / Download / Restart & Update.** The app checks on start (you can turn that off) and restarts to finish installing.

### Quick Links

*   **Request a Feature / Read Documentation** — jump to GitHub or these docs.

## 2. Text Detection

These tune how picky the finder is. See [Finding Text](/user-manual/ocr-processing/) for when to touch them.

*   **Minimum / Maximum Text Height** — ignore boxes smaller/taller than this. Default: 40px / 100px.
*   **Minimum Confidence** — how sure the app must be to keep a result (0–1). Default: 0.7. Lower = more boxes, more mistakes.
*   **Merge nearby boxes** — how close boxes must be to join up. Default: 0.5. Nudge up if sentences split; down if bubbles glue together.
*   **Max image size** — shrink huge images before reading for speed. Default: 2000px on the long side.
*   **Parallel workers** — how many pages are read at once. Default: 2.

## 3. Clean-up (Manual tool)

For when you paint clean-ups by hand:

*   **Method:** `Fast` (instant, no download) or `Best quality` (needs a one-time download, better on complex art).
*   **Brush softness (radius):** How soft the fix blends in. Default: 5. Small changes go a long way.

## 4. Translation

Where you connect AI services. See [AI Translation](/user-manual/ai-translation/) for the walkthrough.

*   **Pick a provider, paste your key, pick a model.** The app remembers it, so you only do this once per provider.
*   **Show free models only:** Tick to hide paid models in the picker.
*   **Manage Models:** Hide models you never use so the list stays short. Hidden ones can be shown again any time.
*   **Target Language:** English, Korean, Japanese, Chinese (Simplified / Traditional), Spanish, French, German, Italian, Portuguese, Russian, Thai, Vietnamese...

> **Tip:** Start with a recommended provider in the list — they're marked as easiest to try or best quality. Local options (Ollama / vLLM / llama.cpp) need no key, just a running address on your computer.

## 5. Shortcuts

Change the keys for things you do a lot:

*   **Combine rows** — Default: `Ctrl+G`
*   **Find / Replace** — Default: `Ctrl+F`
*   **Settings** — `Ctrl+,`
*   **Save** — `Ctrl+S`
*   **Translate** — `Ctrl+Enter` (in the translation panel)

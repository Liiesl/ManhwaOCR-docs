---
layout: ../../layouts/BaseLayout.astro
title: Troubleshooting & Glossary
description: Common issues, solutions, and key terminology for the Easy Scanlate.
order: 11
---

# Troubleshooting & Glossary

Quick fixes for common bumps, plus plain definitions for words we use a lot.

> TODO screenshot: error dialog with Copy details button.

## Quick fixes

### The app won't start
*   **Try:** Reinstall from [GitHub releases](https://github.com/Liiesl/EasyScanlate/releases), making sure the antivirus exclusion from [Installation](/getting-started/installation#crucial-step-add-antivirus-exclusion-before-first-launch) is in place *before* first launch. Restart your computer if it still sulks.

### Text detection fails or finds nothing
*   **Try:** Check models finished downloading (`Settings` → `General` → `Replay onboarding` shows status). Restart, try one page first. If images are huge, try a smaller test page. See [Troubleshooting](/getting-started/errors/).

### "API Key Missing" for translation
*   **Try:** `Settings` → `Translation`, pick your provider, paste your key (no extra spaces), pick a model. You can get a key from your provider's site — recommended ones link out from Settings.

### Translation fails / busy / rate limit
*   **Try:** Wait a little and retry, or try another model. Free tiers get busy at peak times. Check your internet (local AI needs its server running).

### Project won't open
*   **Try:** It may have moved — use `Open Project` and browse to it. Try a backup copy. As a last resort, copy the `.mmtl`, rename the copy to `.zip`, and peek inside to rescue images.

### Import / export fails
*   **Try:** For imports, only edit words between tags, not the tags. For exports, check write permission + free disk space in the output folder.

### Slow / laggy, especially during detection
*   **Try:** Close other heavy apps. In Settings, lower max image size a notch. Turn off auto clean-up while testing for raw speed.

### Updates fail
*   **Try:** Check internet, retry later from `Settings` → `General`. Or grab the newest installer manually from GitHub releases.

### Manual select says "invalid area"
*   **Try:** Keep the box fully inside the page and not tiny. Give text a little margin and try again.

### Leftover temp files after a crash
*   **Try:** It's safe to delete the app's leftovers in your system temp folder (Windows: `Win+R` → `%TEMP%`). Your saved `.mmtl` is what matters.

## Glossary

*   **API Key:** A secret code from an AI service that lets the app translate for you.
*   **Automatic detection:** Reading all pages at once.
*   **Manual select:** Drawing a box to read just that spot.
*   **Clean-up:** Tidying the background behind words so new text sits cleanly.
*   **Profile:** A version of your words. "Original" (found text, kept safe), "User Edit" (your fixes), translation profiles ("... (English)" etc.).
*   **Provider:** The AI service you picked for translation.
*   **Model:** The specific AI brain within a provider (fast vs. thorough).
*   **Image View:** The middle area showing your pages + boxes.
*   **Results list:** The right-side list of all found text, ready to edit.
*   **MMTL File (.mmtl):** Your whole project in one file — images, words, versions, styles. Double-click to open.
*   **Rendered Image:** A final picture with your chosen profile's words drawn on — what you share.
*   **Stitching / Splitting:** Joining pages into one long strip, or dividing one page into two.
*   **For-translators file:** A clean XML/TXT export for sending words out and bringing translations back.

## If you need help

1.  In any error dialog, click **Copy details**.
2.  Check [GitHub Issues](https://github.com/Liiesl/EasyScanlate/issues) for similar reports.
3.  Open a new issue with: app version, what you clicked, what you expected, and a screenshot if you can.

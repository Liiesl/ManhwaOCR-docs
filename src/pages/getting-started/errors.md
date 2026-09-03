---
layout: ../../layouts/BaseLayout.astro
title: Troubleshooting
description: Find solutions to common errors and issues with EasyScanlate.
order: 5
---

# Troubleshooting Common Errors

This page provides solutions for common issues you may encounter while installing or running EasyScanlate.

---

## The app won't start

**What you see:** Nothing happens, or it closes right away.

**Try this:**

1.  Did you add the antivirus exclusion *before* first launch? If not, your antivirus may have removed the app file. See [Installation](/getting-started/installation#crucial-step-add-antivirus-exclusion-before-first-launch). Reinstall, add the exclusion, then launch again.
2.  Try a fresh install from the latest release on [GitHub](https://github.com/Liiesl/EasyScanlate/releases).
3.  Restart your computer (seriously, it helps more often than you'd think).

---

## Models won't download / get stuck

**What you see:** The Welcome wizard or Manage Models shows a download that never finishes or says "Failed" with a Retry button.

**Try this:**

1.  Check your internet connection.
2.  Click **Retry** next to the failed item.
3.  If it keeps failing, close and reopen the app, then go to `Settings` → `General` → `Replay onboarding` to try again.
4.  Running low on disk space? Free up a little room and retry.

> **Good to know:** Downloads pick up where they left off — you don't start from zero.

---

## Project won't open

**What you see:** "Failed to load project" or the images list is empty.

**Try this:**

*   The `.mmtl` file may have been moved or renamed. Use `Open Project` and browse to it again.
*   If the file is damaged, try a backup copy if you have one (`Save As` checkpoints are great for this).
*   Advanced peek: `.mmtl` files are zip files. You can copy yours, rename the copy to `.zip`, and look inside to check your images are still there. Then create a fresh project with the same images.

---

## Text detection gives errors or finds nothing

**What you see:** Pressing `Process OCR` shows an error, or finishes with no boxes.

**Try this:**

1.  Make sure models finished downloading (see above).
2.  Restart the app and try again on one image first.
3.  If images are huge, try a smaller test image to rule out memory issues.
4.  Tweak [detection settings](/user-manual/settings/) — for example lower the confidence bar a little, or widen the min/max text height. Start small and try again.

### A selected area won't read

*   Make sure your box is fully inside the image and not tiny.
*   Draw a slightly bigger box with a little margin around the text and try again.

---

## Saving fails / "Permission denied"

**What you see:** Saving the project or exporting images fails.

**Try this:**

1.  Make sure the folder isn't read-only and the file isn't open in another program.
2.  Try saving to your Documents folder.
3.  Check your antivirus exclusion (see Installation) — it can block saving too.

---

## Translation says "API Key Missing" or fails

**What you see:** Translation won't start, or shows an API error.

**Try this:**

1.  Go to `Settings` → `Translation`, pick your provider, and make sure your key is pasted in correctly (no extra spaces).
2.  Make sure you've run text detection first — there's nothing to translate yet if the results list is empty.
3.  Check your internet connection.
4.  If it says rate limit / busy / unavailable, wait a bit and retry, or try a different model. Free tiers can be busy at peak times.

---

## Imports / exports look wrong

*   **Import:** Make sure the file came from an EasyScanlate export (XML/TXT). Only edit the text between tags, not the tags themselves. If in doubt, validate it opens as text first.
*   **Export:** Check you have write permission and enough disk space in the output folder.

---

## The app is slow

*   Close other heavy apps while running text detection.
*   In `Settings`, a smaller max image size (e.g. `2000` → lower) speeds things up a lot on big images.
*   Turn off extra automatics (like auto clean-up) if you want raw speed while testing.

---

## Updates won't check / download

*   Check your internet, then try `Settings` → `General` → `Check for Updates` again later.
*   You can always grab the newest installer manually from [GitHub releases](https://github.com/Liiesl/EasyScanlate/releases).

---

## Getting Help

If it's not covered here:

1.  In any error dialog, use **Copy details** to grab what happened.
2.  Check the [GitHub Issues](https://github.com/Liiesl/EasyScanlate/issues) page for similar problems.
3.  Open a new issue with your app version, what you clicked, and what you expected. Screenshots help a lot!

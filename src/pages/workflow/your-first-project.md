---
layout: ../../layouts/BaseLayout.astro
title: Your First Project
description: A complete step-by-step tutorial for creating, editing, and exporting your first Easy Scanlate project.
order: 2
---

# Your First Project

This tutorial takes you from install to finished pictures with a tiny project. By the end you'll know the whole loop — and be ready for bigger chapters.

> TODO screenshot: Home → New Project dialog → main window with boxes.

## What you need

*   **Easy Scanlate installed** ([Installation](/getting-started/installation/)) with the antivirus exclusion done.
*   **Welcome wizard finished** (models downloaded — happens on first launch).
*   **3–5 sample images** in a folder (JPEG or PNG).

> **No AI key needed:** We'll do finding + editing first. Translation is optional at the end.

---

## Step 1: Create a Project

1.  Open Easy Scanlate — you'll see **Home**.
2.  Click **New Project**.
3.  Fill in:
    *   **Source**: "Folder" → pick your sample images folder.
    *   **Original Language**: The language in the images (e.g. Korean).
    *   **Project Location**: "Browse" → where to save your `.mmtl` file.
4.  Click **Create**.

Your pages open in the main workspace. Files are auto-sorted by numbers in their names, so messy names are fine.

---

## Step 2: Find the Text

1.  In the **right panel**, click **Start** (text detection).
2.  Watch the progress. When done:
    *   Boxes appear on your pages.
    *   Words appear in the **results list**.

> **First time?** If models weren't finished yet, the app asks you to finish the welcome downloads first. It only happens once.

**What to expect:** Most dialogue is caught. Tiny, stylized, or busy-background text may need a nudge in the next step.

---

## Step 3: Check and Fix the Words

### Read through

*   Click text in the list to jump to its box on the page (and vice versa).
*   Click into any text and type fixes. It grows as you type.

> **Kind safety net:** Editing while on "Original" automatically saves to a "User Edit" profile, keeping your raw results safe.

### Add what was missed

1.  Click **Manual OCR** in the left toolbar (crosshair cursor).
2.  Drag a box around missed words (a little margin helps).
3.  Release — it reads just that spot and tucks it into the list in order.
4.  Click **Manual OCR** again to exit.

### Remove junk

Click the **trash icon** on any row you don't want (sound effects, page numbers). Confirm once — tick "Remember choice" to skip next time.

---

## Step 4: Make It Pretty (Optional)

1.  Click any box on the page.
2.  The **Style panel** (top right) wakes up. Try:
    *   **Font**: Built-ins + your system fonts, no setup needed.
    *   **Size**: Leave **Auto** on so words fit the bubble.
    *   **Color + Outline**: Dark words + light outline (or reverse) pops on busy art.
    *   **Background + Shape**: Solid or soft gradient; rectangle, rounded, ellipse, or speech bubble.
3.  Love it? Click **+** in **Presets** to save it, then click through similar boxes applying it.

---

## Step 5: Save + Export

### Save your project (editable)

Press **Ctrl+S** (or Save over the pages → Save Project). This updates your `.mmtl` — do it often!

### Save finished pictures (to share)

1.  Click **Save** over the pages → **Save Rendered Images**.
2.  Pick:
    *   **Where** to save.
    *   **Format**: PNG (crispest), JPEG/WebP (smaller) + Quality if shown.
    *   **Which words**: Usually your "User Edit" profile.
3.  Click **Export**. Done — those are your shareable pages!

---

## Optional: Translate with AI

1.  Get a key from a provider (easiest to try is marked in `Settings` → `Translation`; Google is great quality with a free tier).
2.  In `Settings` → `Translation`, pick the provider, paste the key, pick a model.
3.  In the **translation panel** (right side), pick your **target language**.
4.  Hit the **translate button** (paper plane) or `Ctrl+Enter`.
5.  A profile like "Mistral Translation (English)" appears — switch to it, polish, then export finished pictures with that profile picked.

---

## Next Steps

Nice work! Now try:

*   **[Common Workflows](/workflow/common-workflows/)** for webtoons, series, and teamwork.
*   **[Project Management](/user-manual/project-management/)** for versions and backups.
*   **[Text Box Styling](/user-manual/text-box-styling/)** for pro-level looks.
*   **[User Manual](/user-manual/)** for everything else.

---

## Quick Reference

| Want to... | Do this |
|--------|--------|
| Save Project | `Ctrl+S` |
| Find all text | "Start" button, right panel |
| Read a missed bit | "Manual OCR" in left toolbar |
| Remove a row | Trash icon on the row |
| Open Settings | `Ctrl+,` or cog button |
| Save pictures | Save button → "Save Rendered Images" |
| Change versions | Profile picker dropdown |
| Translate | Paper plane / `Ctrl+Enter` |

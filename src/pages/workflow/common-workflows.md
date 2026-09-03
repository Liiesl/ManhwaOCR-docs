---
layout: ../../layouts/BaseLayout.astro
title: Common Workflows
description: Optimized workflows for specific project types and scenarios in Easy Scanlate.
order: 3
---

# Common Workflows

Pick the recipe that matches your project — or mix and match.

> TODO screenshot: stitch confirm bar + profile picker + export dialog.

---

## Webtoon Workflow (long vertical comics)

Long strips need a little care since story flows top to bottom.

1.  **Import in order.** Name files with numbers (`chapter01_01.jpg`...) — the app sorts them for you.
2.  **Join pages that belong together (optional).** If a scene spans files: left toolbar → **Stitch** → click pages top to bottom → **Confirm Stitch**. Found text moves along automatically.
3.  **Find all text** with Start. Long pages are handled in sections behind the scenes.
4.  **Divide for sharing (if needed).** Stitched but need separate files at the end? Left toolbar → **Split** → click the page → place and drag the cut line → **Confirm Split** (max two pieces per split).

**Tips:**

*   Joining before detection gives better story context (and nicer translations).
*   Check tall bubbles — webtoon speech can sprawl. Add missed bits with Manual select.

---

## Multi-Chapter Management (series / volumes)

### Pick a shape

**Option A: One project per chapter (recommended for most)**
*   Separate `.mmtl` files per chapter.
*   Pros: Smaller, faster, one bad file can't sink the ship.
*   Cons: A few more files to juggle.

**Option B: Everything in one big project**
*   Pros: One set of versions + styles for global tweaks.
*   Cons: Bigger, slower.

### Starter kit (Option A)

1.  **Make a template.** Set up one chapter with your favorite detection settings, a saved style preset, and your usual fonts. Save as `template.mmtl`.
2.  **Copy per chapter.** Open the template, swap in the new chapter's images via `File`, then `Save As` → `chapter_02.mmtl`...
3.  **Name versions clearly** ("Ch1 - Edit", "Ch1 - Translation") so merging later is painless.

**Tips:** Back up at milestones (`Save As`). Jot down your font/size combo for consistency. Export a few chapters at a time.

---

## Quick Words Only (no translation, no styling)

For grabbing text for other tools, archives, or word counts:

1.  New Project → pick images → Create.
2.  Click **Start**.
3.  **Import/Export menu** → Export words → **For translators (XML)** for clean text, or **Full backup (JSON)** for everything.
4.  Done. No editing needed.

**Tips:** If words are missed, tweak detection settings *before* re-running. Turn off auto clean-up in Settings for max speed here.

---

## Working with a Translator (who doesn't use the app)

1.  Make the project, run detection.
2.  **Import/Export menu** → Export → **For translators (XML)**, profile "Original" → save `project_for_translate.xml`.
3.  **Send** the XML (+ pages if helpful). Ask them to only edit words between tags.
4.  **Bring it back:** Import/Export → Import → pick their file → **Create New Profile** ("Translator A").
5.  Switch to that profile, read it on the pages, fix styles, export finished pictures.

**Tips:** Number rounds ("Translation v1/v2"). If XML scares them: export pictures with Original words, let them mark up the pictures, and you type fixes into your edit profile.

---

## Quality-Focused (polished releases)

1.  **Prep:** Use the cleanest source images you have.
2.  **First pass:** Run detection with defaults. Expect good, not perfect.
3.  **Review page by page.** Check low-confidence rows first — they're usually the ones needing love.
4.  **Manual pass:** Add tiny/styled/busy-background text with Manual select.
5.  **Edit:** Fix mistakes, join split sentences (`Ctrl+G`, same image + neighbors only), delete junk.
6.  **Translate:** Translate, then read *every* line in context. Re-try selected lines that sound off.
7.  **Style:** Perfect one bubble → save as Preset → apply to siblings → fine-tune.
8.  **Final check:** Flip through profiles, export one test picture at full size, adjust, then export all as PNG.
9.  **Save:** `Ctrl+S`, plus `Save As` checkpoints.

**Tips:** Take breaks — tired eyes miss things. Zoom to full size for alignment. Keep originals backed up separately.

---

## When Something Goes Wrong

### Project won't open

1.  Find the `.mmtl`.
2.  Copy it, rename the copy to `.zip`, and peek inside — your images should be there.
3.  Make a fresh project with the same images, then re-do detection or bring back words from an export if you have one.

### Deleted something important

1.  Haven't saved yet? Close without saving and reopen.
2.  Check the **Original** profile — your raw results are still there.
3.  Re-run detection on that spot, or re-add with Manual select.

### Avoid it next time

*   `Ctrl+S` often. `Save As` checkpoints (`..._v1.mmtl`, `..._v2.mmtl`).
*   Keep source images backed up separately.
*   Export finished pictures at milestones.

---

## At a Glance

| Workflow | Best For | Key Tools |
|----------|----------|--------------|
| Webtoon | Long strips | Stitch / Split |
| Multi-Chapter | Series | Template project, clear names |
| Quick Words | Text only | Fast export, skip styling |
| With Translator | Teamwork | XML export / import as new profile |
| Quality | Polished releases | Page-by-page review + presets |
| Rescue | Oops moments | Backups + peek-inside-zip |

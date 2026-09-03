---
layout: ../../layouts/BaseLayout.astro
title: Import & Export
description: Learn how to import and export project data, OCR results, translations, and rendered images in the Easy Scanlate.
order: 9
---

# Import & Export

Share words with others, back up your text, or make the final pretty pictures. Two menus cover it:

*   **Import/Export menu** (bars icon, right panel): for words and translations.
*   **Save menu** (save icon, over the pages): for projects and finished images.

## 1. Export words

To save your text for backup or other tools:

1.  Click the **Import/Export menu** → `Export`.
2.  Pick a flavor:
    *   **Full backup (JSON):** Everything — words, where they sit, confidence, current profile's text, styles. Best for safekeeping. Tick **Pretty Print** if you want it human-readable.
    *   **For translators (XML/TXT):** Clean, tidy text grouped by image — perfect to send to a translator or another tool. Pick the profile to export (usually Original or your edit).
3.  Choose where to save it. Done in seconds.

## 2. Bring translations back in

Got translated text back from someone (or another tool)?

1.  Click the **Import/Export menu** → `Import Translation File`.
2.  Click `Browse...` and pick the file (`.xml` or `.txt` from an EasyScanlate export).
3.  Choose where it goes:
    *   **Create New Profile:** Give it a name like "Translator A". Safest — nothing gets overwritten.
    *   **Existing Profile:** Pick one to replace.
4.  Click `Import`. Find it in the [profile picker](/user-manual/project-management/), read it on the pages, and polish.

> **Tip for senders:** Ask translators to only change the words between tags, not the tags themselves. Number rounds ("v1", "v2") to stay sane.

## 3. Save finished images

This bakes the words from your chosen profile onto copies of your pages — the files you share or publish:

1.  Click the **Save** button over the pages → `Save Rendered Images`.
2.  Pick:
    *   **Where:** Output folder.
    *   **Format:** `PNG` (crispest), `JPEG` or `WebP` (smaller).
    *   **Quality:** For JPEG/WebP, 1–100. High 80s–90s looks great for most.
    *   **Which words:** The [profile](/user-manual/project-management/) to draw (your edit or a translation).
3.  Click `Export`. Each page is saved with its boxes drawn on.

**Quick rule:** `Ctrl+S` saves your *project* (`.mmtl`, editable). Export saves *pictures* (final, not editable). Do both at milestones.

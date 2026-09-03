---
layout: ../../layouts/BaseLayout.astro
title: Text Editing & Management
description: Detailed guide on editing, combining, deleting, and finding/replacing text in Easy Scanlate.
order: 5
---

# Text Editing & Management

Fixing up found text all happens in the **results list** on the right. Click words there, or click boxes on the pages — they stay in sync.

> TODO screenshot: results list with a selected row + highlighted box on the page.

## 1. The results list

Each entry is a card/row with the words, which image it's from, and little action buttons.

**Things you can do:**

*   **Edit:** Click into the text and just type. It grows as you type.
*   **Select:** Clicking text highlights the matching box on the page (and scrolls to it). Clicking a box on the page highlights its text here.
*   **Delete:** Click the trash icon to remove junk (sound effects, page numbers you don't want). You'll get a confirm dialog unless you turned it off in Settings.
*   **Retranslate one line:** Click the little re-try/translate icon on a row to translate just that line again.
*   **Move around:** Scroll or use arrow keys; everything stays smooth.

## 2. Editing protects your Original

When you edit while viewing the **Original** profile, the app automatically makes (or switches to) a **"User Edit"** profile and saves there. Your raw found text stays safe underneath. [More about profiles](/user-manual/project-management/).

You can also click a box right on the page and edit it in the side panel — same result.

## 3. Combining rows

If one sentence got split into two boxes, join them:

1.  Select the rows that belong together (they must be from the **same image**, one after the other).
2.  Press `Ctrl+G` (or right-click → `Combine Rows`).
3.  The first row keeps the joined text (lines joined with line breaks); the others are removed.

> **Note:** Combining while on "Original" will use your edit profile instead, keeping Original safe.

## 4. Deleting rows

For misdetections you don't want at all:

1.  Click the trash icon on the row.
2.  Confirm (tick "Remember choice" to skip this next time).
3.  It's hidden and left out of exports. Changed your mind? Your Original profile still has it, or just re-run detection on that spot.

## 5. Finding your way in big projects

*   **Click either side:** Page ↔ list selection follows each other.
*   **Go slow on long chapters:** Work image by image; save (`Ctrl+S`) as you go.
*   **Low-confidence first:** If a confidence score looks low, check that one first — it's the most likely to need a fix.

## 6. Find and Replace

> **Note:** Bulk find/replace across the whole project lives under `Edit > Find/Replace` (`Ctrl+F`) when available. It works on the profile you're viewing, with options like match case. Highlights jump you to each match in both the list and the page.

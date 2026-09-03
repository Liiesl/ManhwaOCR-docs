---
layout: ../../layouts/BaseLayout.astro
title: Project Management
description: How to save your project and manage text profiles in the Easy Scanlate.
order: 3
---

# Project Management

Two habits make everything smoother: save often, and let `Profiles` keep your versions tidy.

## Saving Your Project

Save the way you'd expect:

*   **To Save:** `File > Save Project`, the `Save` button over the images, or `Ctrl+S`.
*   **To Save As:** `File > Save Project As...` to make a copy — handy for backups or checkpoints like `chapter_01_backup.mmtl`.

You'll see a little confirmation when it worked.

## Your project file

Easy Scanlate projects use the `.mmtl` extension. It's **one file** that holds everything: your images, found text, edits, styles, and translations. Easy to move, back up, or send to a friend.

> **Good to know:** A `.mmtl` is a zip file with your images plus a project description inside. Normally you'll never touch the insides — but if a file ever won't open, you can copy it, rename the copy to `.zip`, and look inside to rescue your images. Old projects from earlier versions still open.

## Managing Profiles

`Profiles` are versions of your words, kept side by side. They let you keep the raw found text, your fixes, and translations separate — and switch between them instantly.

*   **Switching Profiles:** Use the `Profile picker` dropdown near the top of the right panel.

### Types of Profiles

*   **"Original":** Created automatically when you run automatic text detection. It's your untouched found text. If you edit while viewing Original, the app kindly makes (or switches to) an edit profile instead, so Original stays safe.

*   **"User Edit" profiles:** Your fixes live here (e.g. "User Edit 1"). Manual selections and typing are saved to the active edit profile. Original stays untouched underneath.

*   **Translation profiles:** Created when you translate, named like "Mistral Translation (English)". Switch to one to read and polish the translation, then export with that profile selected.

When you switch profiles, both the results list and the boxes on your pages update right away to show that version.

### A couple of tips

*   Your active profile is remembered. Reopen the project later and you're right where you left off (if that profile is gone, you'll land on Original).
*   Name translation rounds clearly ("Translation v1", "Translation v2") when working with others — future you will say thanks.

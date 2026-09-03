---
layout: ../../layouts/BaseLayout.astro
title: AI Translation
description: Translate your text with your favorite AI service, right inside Easy Scanlate.
order: 8
---

# AI Translation

Easy Scanlate can send your found text to an AI service and bring back translations — with enough surrounding story to stay in character. You pick the service and target language, the app takes care of the rest.

> TODO screenshot: translation panel with language picker + translate button.

## 1. Connect a service (one-time per provider)

1.  Go to `Settings (Ctrl+,)` → `Translation`.
2.  Pick a **provider**. The top of the list marks a few as **recommended**:
    *   **Easiest to try:** A gateway with free models to test, no credit card needed to start.
    *   **Best quality in our tests:** Great results with a free tier, no credit card needed. The free tier can be busy — retries are normal.
    *   Plus many more: OpenAI, Anthropic, xAI, OpenRouter, DeepSeek, Mistral, and others. If you run AI on your own computer, pick **Ollama / vLLM / llama.cpp** and enter its address (no key needed).
3.  **Paste your API key** (from that provider's website) and pick a **model**.
    *   Faster / smaller models = quick and cheap. Bigger models = nicer wording when you need it.
    *   Tick **free models only** if you only want to see freebies. Use **Manage Models** to hide ones you never touch.

You can connect more than one provider and switch between them later.

## 2. The translation panel

Once connected, the panel on the right shows:

*   **Provider + Model:** What will do the translating. Switch any time.
*   **Target Language:** What to translate into (English, Japanese, Korean, Chinese, Spanish, French, German, and more).
*   **Translate button** (paper plane) or `Ctrl+Enter` to go.
*   **Retranslate selected only:** Tick this, select a few rows in the results list, and only those get re-done — perfect for fixing stubborn lines without redoing everything.
*   **Progress** so you know it's working.

## 3. Translating

1.  Make sure you've run text detection and can see words in the results list.
2.  Pick your **target language**.
3.  Check your **provider/model** is the one you want.
4.  Choose:
    *   **Everything:** Leave "retranslate selected only" off to do all visible text.
    *   **Just a few:** Tick it and select rows first.
5.  Hit **translate** (`Ctrl+Enter`) and watch the chat area stream back results.

When it finishes:

1.  A new profile appears, named like `Mistral Translation (English)`.
2.  Switch to it with the profile picker to read and polish.
3.  Export finished images with that profile selected.

The app sends neighboring lines along as context (a few before/after), so jokes and names stay consistent. Big projects are sent in safe-sized chunks automatically.

## 4. Tips for nicer results

*   **Fix the source first:** Clean OCR mistakes in Original / User Edit before translating — the AI can only translate what it sees.
*   **Try another model for hard pages:** Quick model for drafts, bigger model for final polish.
*   **Re-try just the weird lines:** Select them, tick "retranslate selected only", and go again.
*   **Keep rounds tidy:** Name profiles "Translation v1 / v2" when comparing.

## 5. If it doesn't work

| What you see | Try this |
|-------|----------|
| "API Key Missing" | Paste your key in Settings → Translation for the chosen provider |
| "No Data" | Run text detection first — the list is empty |
| Fails / busy / rate limit | Wait a bit and retry, or try another model. Free tiers get busy |
| Wrong / stiff wording | Re-try selected lines, or try a larger model |
| No internet | The app needs to reach the provider (local AI needs its server running) |

---
layout: ../../layouts/BaseLayout.astro
title: AI Translation
description: Use Google Gemini or Mistral AI to translate your OCR text with an integrated chat interface.
order: 8
---

# AI Translation

Easy Scanlate integrates with **Google Gemini** and **Mistral AI** APIs to provide automated translation of your OCR text. The translation feature uses a chat-style interface where you can interact with the AI and monitor translation progress in real-time.

## 1. API Key Setup

Before using AI Translation, configure your API key in Settings.

1.  Go to `Settings (Ctrl+,)` from the menu bar or click the `Settings` (cog icon) button.
2.  Navigate to the `AI Translation` tab.
3.  **Select Provider:** Choose between **Gemini** or **Mistral** from the provider dropdown.
4.  **API Key:**
    *   For **Gemini**: Get one from [Google AI Studio](https://ai.google.dev/) (a Google account is required).
    *   For **Mistral**: Get one from [Mistral AI Console](https://console.mistral.ai/) (an account is required).
    *   Enter your API key into the designated field.
5.  **Model:** Select your preferred model from the dropdown. Available models include:
    *   **Gemini:** `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-2.5-flash-lite`, `gemini-2.0-flash`, `gemini-2.0-flash-lite`, `gemma-3-27b-it`, `gemma-3n-e4b-it`
    *   **Mistral:** `mistral-small-latest`, `mistral-medium-latest`, `mistral-large-latest`

## 2. Using the Translation Chat

Once your API key is configured, the Translation Chat widget appears in the right panel of the Main Application Window.

### Translation Chat Interface

The chat interface provides a conversational way to interact with the AI translation service.

#### Chat History Area

The main area displays the conversation between you and the AI:

*   **Your Messages:** Show your translation requests
*   **AI Responses:** Show the translation results with streaming updates
*   **Error Messages:** Display any issues that occur during translation

#### Control Panel

Located at the bottom of the chat widget:

**Model Selection Bar:**
*   **Provider:** Switch between Gemini and Mistral
*   **Model:** Select the specific model to use for translation

**Translation Controls:**
*   **Target Language:** Choose the language to translate into (e.g., "English", "Japanese", "Chinese (Simplified)", "Korean", etc.)
*   **Progress Bar:** Shows real-time translation progress

**Options:**
*   **Retranslate selected only:** When checked, only selected OCR results will be re-translated (requires rows to be selected in the main view)

**Translate Button:**
*   Paper plane icon to initiate translation
*   **Keyboard Shortcut:** Press `Ctrl+Enter` to send

## 3. Generating Translations

1.  **Select Target Language:** Choose your desired target language from the dropdown.
2.  **Select Provider/Model:** Ensure the correct provider and model are selected.
3.  **Choose Translation Mode:**
    *   **Full Translation:** Uncheck "Retranslate selected only" to translate all visible OCR results
    *   **Selected Only:** Check "Retranslate selected only" and select specific rows in the main view to re-translate only those entries
4.  **Initiate Translation:** Click the translate button or press `Ctrl+Enter`
5.  **Monitor Progress:** The AI's response will stream into the chat history, and the progress bar will show activity.

## 4. Translation Results

When translation completes:

1.  A new profile is automatically created with the name format: `{Provider} Translation ({Target Language})`
2.  The translated text is parsed and stored in this profile
3.  A completion message appears in the chat
4.  The new profile becomes available in the [Profile Selector](/user-manual/project-management/#managing-profiles) in the main window

You can then switch to this profile to view and edit the translated text in the main application window.

## 5. Tips for Best Results

*   **Provider Selection:** Mistral offers significantly higher free tier limits (1 billion tokens/month) compared to Gemini (20 requests per model per day). Gemini may provide different translation styles for certain languages.
*   **Model Selection:** Use flash models for faster, cost-effective translations; use pro/large models for higher quality when needed
*   **Context:** The AI receives all OCR text from your project, so it can use context from surrounding text for better translations
*   **Retranslation:** Use the "Retranslate selected only" option to refine specific problematic entries without re-translating everything

## 6. Troubleshooting

| Issue | Solution |
|-------|----------|
| "API Key Missing" error | Verify your API key is entered in Settings > AI Translation |
| "No Data" warning | Ensure OCR has been performed and results are visible |
| "No Content" warning | Check that OCR results contain actual text (not just whitespace) |
| Translation fails | Check your internet connection and API key validity |
| Slow translation | Try a faster model (e.g., gemini-2.5-flash-lite or mistral-small-latest) |

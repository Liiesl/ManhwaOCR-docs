---
layout: ../../layouts/BaseLayout.astro
title: AI Translation (Gemini)
description: Use Google Gemini to translate your OCR text, manage translation profiles, and refine results.
order: 7
---

# AI Translation (Gemini)

The Manhwa OCR Tool integrates with the Gemini API to provide powerful, automated translation of your OCR text. This feature allows you to quickly translate large volumes of text into various languages, with options for contextual refinement.

## 1. API Key Setup

Before you can use AI Translation, you must configure your Gemini API key.

1.  Go to `Settings (Ctrl+,)` from the menu bar or click the `Settings` (cog icon) button.
2.  Navigate to the `Gemini API` tab.
3.  **Gemini API Key:**
    *   If you don't have an API key, you can get one from [Google AI Studio](https://ai.google.dev/) (a Google account is required).
    *   Enter your API key into the designated field.
4.  **Gemini Model:** Select your preferred Gemini `Model` from the dropdown (e.g., `gemini-1.5-flash`). Different models offer varying performance, cost, and output quality.

## 2. Launching the Translation Window

Once your API key is configured, launch the Translation Window by clicking the `AI Translation` button at the bottom-right of the Main Application Window.

### Translation Window Overview

The Translation Window provides a multi-column view of your text alongside a chat interface for interacting with Gemini.

<img src="/assets/images/translation-window.png" alt="Translation Window Overview" width="1000">
*(Placeholder: Replace with actual screenshot of the Translation Window)*

#### Left Panel (Comparison View)

This panel displays your source text and translation columns side-by-side, allowing for easy comparison.

*   **Source Profile:** Use the dropdown at the top to select which existing [profile](/user-manual/project-management/#managing-profiles) (e.g., "Original", "User Edit 1") will be used as the input for translation.
*   **Translation Columns:** Each column represents a target language.
    *   Add more columns using the `+` button in the header to translate into multiple languages simultaneously or compare different versions.
    *   Select the target language for each column using its dropdown menu (e.g., "English", "Japanese").
*   **Row Selection:**
    *   **Click:** Selects a single row.
    *   **Ctrl+Click:** Toggles the selection of a row.
    *   **Shift+Click:** Selects a range of rows.
    *   **Header Checkbox:** Toggles selection for all rows.
    *   Selected rows are highlighted with a distinct background color.

#### Right Panel (Chat Interface)

This panel is for interacting with the Gemini API. You input prompts and view the translation responses here.

*   **Prompt Input:** Enter your instructions for Gemini. Be specific to guide the translation (e.g., "Translate to casual English," "Keep Japanese honorifics").
    *   **Target Language Hint:** The prompt box automatically suggests the target language from your selected column to help you formulate your prompt.
    *   **Send Shortcut:** Use `Ctrl+Enter` to send the prompt.
*   **Target Profile Selector:** A dropdown menu above the `Send` button. **Crucially, select which translation column on the left will receive the AI's output.**
*   **Send Button:** Initiates the translation. Its icon changes based on your selection:
    *   **Paper Plane (Translate All):** Appears when all rows are selected. Starts a full translation.
    *   **Refresh Arrow (Retranslate Selected):** Appears when a subset of rows is selected. Starts a re-translation for only those rows.
*   **Chat History:** Displays your prompts and Gemini's responses, including streaming updates and any error messages.

#### Bottom Bar

*   **Gemini Model:** Shows the currently selected model. You can change it here for specific tasks.
*   **Progress Bar:** Shows the real-time progress of the translation job.
*   **Apply to Project Button:** Saves the selected translations from the comparison columns to your main project.
*   **Close Button:** Closes the Translation Window.

## 3. Generating Translations

1.  **Select Source:** In the Left Panel, choose the `Source:` profile containing the text you want to translate.
2.  **Select Target:** Choose the target translation column. If needed, add a new one with the `+` button. Ensure the `Target Profile Selector` in the chat panel matches this column.
3.  **Write Prompt:** In the chat input, type your translation instructions. For example: `Translate only the Korean text to formal English, keeping all other text as is.`
4.  **Initiate Translation:**
    *   **For a full translation:** Ensure all rows are selected in the comparison view, then click the `Send` button (paper plane icon).
    *   **For re-translation of specific rows:** Select only the rows you want to re-translate, then click the `Send` button (refresh arrow icon). This method cleverly includes context from surrounding (unselected) text in the prompt to Gemini, significantly improving the accuracy and coherence of the refined translation.
5.  **Monitor Progress:** Gemini's response will stream into the chat history, and the `Progress Bar` will show activity. The translated text will populate the target column in the Left Panel as it's generated.

## 4. Applying Translations to Your Project

After you are satisfied with the generated translations, you must apply them to your project to save them.

1.  **Review and Select:** In the Left Panel, use the checkboxes in each row to select the translations you want to keep.
    *   If a row is **checked**, its text from the translation column will be saved to the new profile.
    *   If a row is **unchecked**, its text will revert to the original `Source Profile` text when saved. This allows you to cherry-pick the best translations.
2.  Click the `Apply to Project` button in the bottom bar.
3.  A new profile (e.g., "Gemini Translation (English)") will be created in your main project, containing the selected translations.
4.  The Translation Window will close, and you can now switch to this new profile in the Main Application Window using the [Profile Selector](/user-manual/project-management/#managing-profiles).
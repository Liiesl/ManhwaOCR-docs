---
layout: ../../layouts/BaseLayout.astro
title: Installation
description: How to install the Easy Scanlate on your system.
order: 2
---

# Installation

This guide covers the two ways to get Easy Scanlate. For almost everyone, the Windows installer is the way to go. It's simple, keeps itself updated, and fetches what it needs on first run.

| Method | Best For | Difficulty |
| :--- | :--- | :--- |
| **1. Via Windows Installer** | **All users.** The simplest and most reliable way to get started. | Easy |
| **2. Build From Source** | Developers, or folks on Mac / Linux. | Medium |

---

## 1. Via Windows Installer (Recommended Method)

This is the most straightforward way to install the application. The installer sets up shortcuts and makes double-clicking `.mmtl` project files just work. Currently, an official installer is only available for **Windows**.

### Installation Steps

1.  **Download:** Go to the project's official **[GitHub Releases Page](https://github.com/Liiesl/EasyScanlate/releases)** and download the latest `EasyScanlate-Installer.exe`.
2.  **Install:** Run the `.exe` installer. It installs just for you (no admin needed) into your local app folder.
3.  **Finish Installation:** Complete the setup, but **do not run the application yet** — read the antivirus note below first.

### Crucial Step: Add Antivirus Exclusion (BEFORE First Launch)

> **IMPORTANT:** Please do this before you run the app for the first time. Otherwise your antivirus (especially Windows Defender) may quarantine or **delete the main app file (`EasyScanlate.exe`)**, and the app won't start.

**Why does this happen?**
New, lesser-known apps are sometimes flagged by mistake. It's a **false positive** — the app is safe, but the check keeps Defender from removing it.

**How to Add an Exclusion to Windows Defender:**

1.  Open the **Start Menu**, type `Windows Security`, and open the app.
2.  Go to **Virus & threat protection**.
3.  Under "Virus & threat protection settings," click **Manage settings**.
4.  Scroll down to the "Exclusions" section and click **Add or remove exclusions**.
5.  Click the **+ Add an exclusion** button and select **Folder**.
6.  In the file dialog that appears, navigate to the installation directory. The default location is:
    `%LocalAppData%\EasyScanlate`
    (for example `C:\Users\YourName\AppData\Local\EasyScanlate`)
7.  Select the `EasyScanlate` folder and click **Select Folder**.

By adding this exclusion, you ensure that Windows Defender will not interfere with the application's files.

### First-Time Launch: Welcome Wizard + Model Download

After you have added the antivirus exclusion, you can safely launch the application for the first time.

You'll see a friendly **Welcome wizard** that walks you through setup:

*   **Welcome** — a quick hello and what to expect.
*   **Download models** — the app fetches the pieces it needs for finding text, guessing styles, finding bubbles, and cleaning up backgrounds. This happens once, shows progress per item, and picks up where it left off if your internet drops. You can't skip this part — everything needs to be ready for full features — but there's a **Retry** button if anything fails.
*   **Appearance & automation** — pick your look and choose helpful automatics (like auto-detecting styles and cleaning behind text).
*   **Translation (optional)** — connect an AI service now, or skip and do it later from Settings.

> **Tip:** You can replay this wizard any time from `Settings` → `General` → `Replay onboarding`.

*   The first text detection may take slightly longer as things get ready.
*   Later launches go straight to the Home screen.

### Configure AI Translation (Optional)

To use the [AI Translation](/user-manual/ai-translation/) feature, you connect a provider:

1.  **Pick a provider to start with:**
    *   **Kilo (Easiest to try):** A single key that opens up lots of models, with free options to test — no credit card needed to try.
    *   **Google (Best quality in our tests):** Great translations with a free tier, no credit card needed. The free tier can be busy sometimes, so occasional retries are normal.
    *   **Mistral:** Another solid choice with a free tier.
    *   There are many more built in (OpenAI, Anthropic, xAI, OpenRouter, DeepSeek, and others), plus local options if you run your own AI at home (Ollama, vLLM, llama.cpp).
2.  **Add it in the app:** Open Easy Scanlate, go to `Settings` → `Translation`, pick your provider and paste your API key, then pick a model.

> **Note:** AI Translation is optional. The application works without it for finding and editing text. Limits and prices depend on the provider you choose — check their site for current details.

---

## 2. Build From Source (Alternative Method)

This method is for developers, folks on Mac or Linux, or anyone who wants the very latest code between releases. You'll need Git and Rust.

### What you need

*   **Git** — to download the code: **[git-scm.com/downloads](https://git-scm.com/downloads)**
*   **Rust** (recent stable) — to build the app: **[rustup.rs](https://rustup.rs/)**

### Steps

1.  **Download the code:**
    ```bash
    git clone https://github.com/Liiesl/EasyScanlate.git
    cd EasyScanlate
    ```

2.  **Build and run:**
    ```bash
    cargo run --release
    ```
    The first build takes a while (it builds the whole app). Later runs are fast.

    Want just the app file? After building you'll find it in `target/release/` as `easyscanlate` (or `EasyScanlate.exe` on Windows).

> **Note for Mac / Linux:** There is no official installer yet — building from source is the way to run the app. Everything else (Home screen, projects, models download) works the same once it starts.

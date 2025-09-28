---
layout: ../../layouts/BaseLayout.astro
title: Installation
description: How to install the Easy Scanlate on your system.
order: 2
---

# Installation

This guide covers the two methods for installing Easy Scanlate. For the vast majority of users, the direct executable installer is the recommended method. It is stable, simple, and includes an automatic downloader for required libraries.

| Method | Best For | Difficulty |
| :--- | :--- | :--- |
| **1. Via Windows Installer** | **All users.** The simplest and most reliable way to get started. | Easy |
| **2. From Source Code** | Developers, advanced users, or those on other operating systems. | Medium |

---

## 1. Via Windows Installer (Recommended Method)

This is the most straightforward way to install the application. The installer handles setting up shortcuts, file associations, and the application's core files. Currently, an official installer is only available for **Windows**.

### Installation Steps

1.  **Download:** Go to the project's official **[GitHub Releases Page](https://github.com/kha-white/manhwa-ocr-tool/releases)** and download the latest `EasyScanlate-Installer.exe`.
2.  **Install:** Run the `.exe` installer. It will guide you through the standard installation process.
3.  **Finish Installation:** Complete the setup, but **do not run the application yet**.

### Crucial Step: Add Antivirus Exclusion (BEFORE First Launch)

> **IMPORTANT:** You must complete this step before you run the application for the first time. If you do not, your antivirus software (especially Windows Defender) will likely quarantine or **delete the main executable file (`main.exe`)**, preventing the application from starting.

**Why does this happen?**
This is a **false positive**. The application is built using a tool called Nuitka, which compiles Python code into an executable. The methods used by this compiler are sometimes incorrectly flagged as suspicious by antivirus programs.

**How to Add an Exclusion to Windows Defender:**

1.  Open the **Start Menu**, type `Windows Security`, and open the app.
2.  Go to **Virus & threat protection**.
3.  Under "Virus & threat protection settings," click **Manage settings**.
4.  Scroll down to the "Exclusions" section and click **Add or remove exclusions**.
5.  Click the **+ Add an exclusion** button and select **Folder**.
6.  In the file dialog that appears, navigate to the installation directory. The default location is:
    `C:\Program Files\EasyScanlate` or `C:\Program Files (x86)\EasyScanlate` 
7.  Select the `EasyScanlate` folder and click **Select Folder**.

By adding this exclusion, you ensure that Windows Defender will not interfere with the application's files.

### First-Time Launch: Automatic Library Download

After you have added the antivirus exclusion, you can safely launch the application for the first time.

Easy Scanlate will check for a critical dependency: the **PyTorch** library.

*   If PyTorch is not found, the application will prompt you to download it.
*   **Important:** This is a large download (over 1.8 GB, requiring ~4 GB of disk space when unpacked). Please ensure you have a stable internet connection and sufficient disk space before proceeding.
*   The application may ask for administrator privileges to install these files correctly. It will offer to restart itself as an administrator automatically.

This one-time download process is fully automated. Once it is complete, the application will ask to be restarted, and subsequent launches will be immediate.

---

## 2. From Source Code (Alternative Method)

This method is for developers, users on operating systems other than Windows, or those who want access to the very latest updates between official releases. It requires installing Python and Git manually.

### Prerequisites

Before proceeding, ensure you have **Python** and **Git** installed on your system.

#### A. Install Python (3.12+ Recommended)

1.  **Download:** Go to the official Python website: **[python.org/downloads/](https://www.python.org/downloads/)**
2.  **Run Installer:** Launch the installer.
3.  **Important (Windows):** On the first page of the installer, you must check the box labeled **"Add Python to PATH"** or **"Add python.exe to PATH"**. This step is crucial for running Python from the command line.
    ![Add Python to PATH checkbox](/assets/0_7nOyowsPsGI19pZT.png)
4.  Complete the installation using the default settings.

#### B. Install Git

Git is required to download (clone) the application's source code from its repository.

1.  **Download:** Go to the official Git website: **[git-scm.com/downloads](https://git-scm.com/downloads)**
2.  **Run Installer:** Launch the installer and proceed with the default recommended settings.

### Installation Steps

The following steps should be performed in a command-line interface (e.g., **Terminal** on macOS/Linux or **Command Prompt (CMD)** / **PowerShell** on Windows).

#### Step 1: Create a Folder and Download the Code

First, create a dedicated folder for the tool and download the source code into it.

1.  **Create and Navigate to a Project Folder:**
    ```bash
    mkdir manhwa-ocr-tool
    cd manhwa-ocr-tool
    ```

2.  **Download (Clone) the Application Repository:** This command uses Git to download the source code into your current folder.
    ```bash
    # Note the space and dot " ." at the end.
    git clone https://github.com/kha-white/manhwa-ocr-tool.git .
    ```

<details>
<summary><b>For Advanced Users: Using a Virtual Environment (Optional)</b></summary>

If you are a developer and prefer to keep project dependencies isolated, you can create and activate a virtual environment after running `cd manhwa-ocr-tool` and before installing PyTorch.

```bash
# Create the virtual environment
# On Windows: 
python -m venv venv
# On macOS/Linux: 
python3 -m venv venv

# Activate it (must be done each time you open a new terminal)
# On Windows: 
.\venv\Scripts\activate
# On macOS/Linux: 
source venv/bin/activate
```
A `(venv)` prefix will appear in your terminal prompt when it's active. All subsequent `pip install` commands will apply only to this environment.

</details>

#### Step 2: Install PyTorch (Crucial First Step)

The OCR engine relies on PyTorch, which must be installed separately **before** other dependencies to ensure hardware compatibility (especially for NVIDIA GPU/CUDA acceleration).

1.  **Go to the Official PyTorch Website:** Navigate to **[pytorch.org](https://pytorch.org/)**.
2.  **Use the Install Helper:** Use the configuration tool on the homepage to select the appropriate options for your system (e.g., Stable, OS, Pip, CUDA version or CPU).
3.  **Copy and Run the Command:** The website will generate a specific `pip install` command. Copy and run this command in your terminal.

> **Example Command (Do NOT blindly copy this!)**
> The generated command for a system with CUDA 12.1 might look like this. **Your command will likely be different.** Always use the command generated by the official PyTorch website.
> ```bash
> pip3 install torch torchvision --index-url https://download.pytorch.org/whl/cu121
> ```

#### Step 3: Install Other Dependencies

Install the remaining required Python libraries from the `requirements.txt` file.
```bash
# On Windows
pip install -r requirements.txt

# On macOS or Linux
pip3 install -r requirements.txt
```

#### Step 4: Run the Application

Launch the tool from your terminal. Make sure you are still inside the `manhwa-ocr-tool` directory.
```bash
# On Windows
python main.py

# On macOS or Linux
python3 main.py
```
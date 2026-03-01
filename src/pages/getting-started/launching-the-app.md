---
layout: ../../layouts/BaseLayout.astro
title: Launching the Application
description: How to start EasyScanlate and what to expect on first launch.
order: 3
---

# Launching the Application

Once installed, you can launch EasyScanlate from your system's application menu (Start Menu on Windows). If you are running from source, execute `py main.py` in your terminal from the project directory.

### Command Line Options

You can also launch EasyScanlate with a project file directly:

```bash
py main.py path/to/project.mmtl
```

This will skip the Home Window and open the project immediately.

### Splash Screen

Upon launch, you will first see a **Splash Screen**. This screen indicates that the application is initializing its components in the background. You will see status messages appear at the bottom, such as:

- "Loading application settings..."
- "Finding recent projects..."
- "Verifying: [project_name]..." (for each recent project)
- "Cleaning up old project entries..." (if more than 6 recent projects)

<img src="/assets/Screenshot 2025-09-27 014001.png" alt="EasyScanlate Splash Screen" width="400">

The splash screen provides visual feedback that the app is starting up correctly. Once initialization is complete, you will automatically be taken to the **Home Window**, your central hub for managing projects.

### First-Time Launch

On first launch, the Home Window will show an empty recent projects list since you haven't opened any projects yet. Use the "New Project" button to get started.

### Startup Errors

If the application fails to start, you may see an error dialog. Common issues include:

- **Dependency Error**: If PyQt5 is installed instead of PySide6, a dialog will appear with instructions to fix the conflict. Uninstall PyQt5 and install PySide6:
  ```bash
  pip uninstall PyQt5
  pip install pyside6
  ```

- **Project File Not Found**: If you specify a `.mmtl` file that doesn't exist, an error dialog will appear.

For critical startup failures, an error dialog will display and the application will exit.

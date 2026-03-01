---
layout: ../../layouts/BaseLayout.astro
title: Custom Fonts
description: How to add and use custom fonts in Easy Scanlate for professional-looking text.
order: 12
---

# Custom Fonts

Easy Scanlate supports custom fonts for professional comic and manga typesetting. This guide covers adding fonts, supported formats, and troubleshooting font issues.

---

## Adding Custom Fonts

### Location

Place font files in the `assets/fonts/` directory within your Easy Scanlate installation folder.

**Default installation path:**
```
C:\Program Files\EasyScanlate\assets\fonts\
```

Or if running from source:
```
EasyScanlate/assets/fonts/
```

### Supported Font Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| TrueType | `.ttf` | Most common, fully supported |
| OpenType | `.otf` | Advanced features supported |

Both formats work identically within Easy Scanlate.

### Adding Fonts Step-by-Step

1.  **Locate Font Files**
    *   Download fonts from reputable sources
    *   Ensure you have proper licensing for your use case

2.  **Copy to Fonts Directory**
    *   Navigate to `assets/fonts/`
    *   Copy your `.ttf` or `.otf` files into this folder

3.  **Restart Easy Scanlate**
    *   Fonts are loaded at startup
    *   New fonts won't appear until you restart the application

4.  **Verify Installation**
    *   Open a project
    *   Select any text box
    *   Open the **Text Box Style Panel**
    *   Check the **Font Family** dropdown - your fonts should appear in the list

---

## Using Custom Fonts

### Selecting a Font

1.  Click a text box on the image to select it
2.  In the **Text Box Style Panel**, find the **Font Family** dropdown
3.  Select your custom font from the list
4.  Changes apply immediately

### Font Style Selection

When a font has multiple styles (variants), a **Font Style** dropdown appears:

*   **Regular** - Normal weight
*   **Bold** - Heavy weight
*   **Italic** - Slanted style
*   **Bold Italic** - Combined

Not all fonts include all styles. If a style is unavailable, the dropdown will be disabled.

### Default Font Behavior

The **"Default (System Font)"** option routes to **AnimeAce**, a comic/manga-optimized font. This provides:

*   Good readability at small sizes
*   Natural comic book aesthetic
*   Works well with speech bubbles

If no custom fonts are available, the application falls back to system defaults.

---

## Recommended Fonts for Comics/Manga

### Free Comic Fonts

| Font | Style | Best For |
|------|-------|----------|
| Anime Ace | Comic/manga | General dialogue |
| Wild Words | Western comic | Bold, impactful text |
| Blambot Fonts | Various | Professional comics |
| Komika | Hand-drawn | Casual/fun dialogue |

### Finding Fonts

*   **Blambot** (blambot.com) - Comic fonts (free for indie projects)
*   **Google Fonts** - Search "comic" or "display" categories
*   **FontSquirrel** - Free commercial-use fonts

Always check licensing terms before using fonts in published work.

---

## Font Styling Tips

### Size and Auto-Sizing

*   **Auto Font Size** (default): Automatically fits text to the text box
*   **Manual Size**: Disable auto-sizing and set specific point size (6-200)
*   Smaller fonts (10-16pt) for fine print, larger (20-40pt) for dialogue

### Text Stroke (Outline)

Adding an outline improves readability:

*   **Width**: 1-3 pixels for subtle, 4-6 for bold
*   **Color**: White stroke on dark text, black stroke on light text
*   Use stroke to make text pop against busy backgrounds

### Bold and Italic

*   **Bold**: Good for emphasis, shouting, or important dialogue
*   **Italic**: Good for thoughts, emphasis, or foreign words
*   These work best when the font includes true bold/italic styles (not synthetic)

### Alignment

*   **Center**: Most common for speech bubbles
*   **Left**: For narration boxes or long text blocks
*   **Right**: Rare, but useful for specific design choices

---

## Troubleshooting Font Issues

### Font Doesn't Appear in List

**Cause**: Application hasn't been restarted since adding font

**Solution**: Close and reopen Easy Scanlate

### Font Shows Incorrect Characters

**Cause**: Font doesn't support the target language/characters

**Solution**: Use a font with proper Unicode support for your language (e.g., fonts with CJK support for Chinese/Japanese/Korean)

### Font Looks Blurry or Pixelated

**Possible Causes**:
*   Font is being rendered too small
*   Image resolution is low

**Solutions**:
*   Increase font size
*   Enable text stroke for definition
*   Check if auto-font-size is calculating incorrectly (try manual size)

### Bold/Italic Buttons Don't Work

**Cause**: Font lacks bold/italic variants

**Solution**: 
*   Some fonts include separate files (e.g., `FontName-Bold.ttf`)
*   Install all variants in `assets/fonts/`
*   Or use the **Font Style** dropdown if available

### Text Doesn't Fit in Box

**Solutions**:
1.  Enable **Auto Font Size** to automatically shrink text
2.  Resize the text box by dragging handles
3.  Edit text to be more concise
4.  Manually reduce font size

### Application Crashes When Selecting Font

**Cause**: Corrupted or incompatible font file

**Solution**:
1.  Remove recently added fonts from `assets/fonts/`
2.  Restart application
3.  Re-add fonts one by one to identify the problematic file
4.  Re-download the problematic font from a different source

---

## Font Organization Tips

### Naming Conventions

Use descriptive names when organizing fonts:

```
assets/fonts/
├── Comic/
│   ├── AnimeAce.ttf
│   ├── WildWords.ttf
│   └── Komika.ttf
├── Display/
│   ├── Impact.ttf
│   └── BebasNeue.ttf
└── Script/
    └── Handwritten.ttf
```

Easy Scanlate reads all subdirectories in `assets/fonts/`.

### Font Presets

Save frequently used font combinations as presets:

1.  Select a text box
2.  Configure your preferred:
    *   Font family
    *   Font size
    *   Text color
    *   Stroke settings
    *   Background style
3.  Click **"+"** in the **Presets** section
4.  Name the preset descriptively (e.g., "Main Dialogue", "Narration", "Sound Effects")

Apply presets instantly to maintain consistent styling across your project.

---

## Performance Considerations

### Font Loading

*   Fonts are loaded at startup
*   Large numbers of fonts (>100) may slightly increase startup time
*   Font files over 10MB may impact performance

### Memory Usage

*   Fonts are loaded into memory as needed
*   Complex OpenType fonts with many glyphs use more memory
*   Generally not an issue unless working with hundreds of fonts

### Best Practices

*   Keep only fonts you actively use in `assets/fonts/`
*   Archive unused fonts elsewhere
*   Use web-optimized font variants when available (smaller file size)

---

## Summary

| Task | How To |
|------|--------|
| Add font | Copy `.ttf` or `.otf` to `assets/fonts/` |
| Use font | Select from Font Family dropdown |
| Fix missing font | Restart Easy Scanlate |
| Save style combo | Create a Preset |
| Fix blurry text | Increase size or add stroke |

Custom fonts are a powerful way to give your translated comics a professional, polished look that matches the original style.

# Website Folder and File Structure

This project is a static website for the TKS AI Visual Template Library.

## Current Runtime Files

```text
pixabay-clone/
├── index.html              # Main static HTML entry
├── styles.css              # Main website styles
├── script.js               # Main website behavior and data mapping
├── package.json            # Vite/React tooling metadata
├── vite.config.mjs         # Vite config
├── assets/                 # Runtime assets used by index.html/script.js
├── public/                 # Public assets for Vite-based usage
├── src/                    # React source files kept from the original prototype
└── docs/                   # Project documentation
```

## Asset Structure

```text
assets/
├── infina-logo.png
├── logo-downloads.js       # Embedded logo download data
├── preview-downloads.js    # Embedded prompt preview download data
├── template-downloads.js   # Template download data placeholder
├── logos/                  # Brand and identity logo assets
├── templates/              # Template, corporate photo, product, and executive assets
└── videos/                 # Video assets used by the landing experience
```

## Recommended Working Rules

- Keep `index.html`, `styles.css`, and `script.js` in the project root unless the app is fully migrated to Vite/React.
- Keep downloadable image files in `assets/templates/` or `assets/logos/`.
- Keep generated download-data files in `assets/`.
- Add notes, upload instructions, and future structure changes in `docs/`.
- Avoid renaming asset files unless every reference in `script.js` is updated at the same time.


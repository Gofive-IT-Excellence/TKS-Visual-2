# Asset Guide

Use this guide when adding new website files.

## Product and Business Images

Place product and business images in:

```text
assets/templates/
```

Use file names like:

```text
product-business-27.png
product-business-28.jpg
```

Then add the file to the matching data list in `script.js`.

## Corporate Photos

Place corporate photo images in:

```text
assets/templates/
```

Use file names like:

```text
corporate-photo-tks-building-04.jpg
```

## Board and Executive Photos

Place board and executive images in:

```text
assets/templates/
```

Use file names like:

```text
board-executive-13.png
```

## Brand and Identity Logos

Place logo files in:

```text
assets/logos/
```

Use file names like:

```text
company-name-logo.png
```

## Download Files

For files that users should download directly, make sure the item in `script.js` includes:

```js
fileName: "exact-file-name.png"
```


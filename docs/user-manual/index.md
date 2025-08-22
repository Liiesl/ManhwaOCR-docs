---
title: User Manual 
description: A complete API reference for developers using My Desktop App.
order: 1
---

# API Reference

This section provides detailed information about the app's API.

## `getData(id)`

Retrieves a specific data object by its ID.

| Parameter | Type   | Description                |
|-----------|--------|----------------------------|
| `id`      | string | The unique ID of the object. |

**Returns:** `Promise<Object>` - A promise that resolves with the data object.

### Example

```javascript
const app = require('my-desktop-app-api');

app.getData('user-123')
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error("Failed to get data", err);
  });
```

Go back to the [Introduction](/).
# FbxTile
The general fundbox tile.
Used mainly inside grid.

```js
// Use the `Tile` constructor to create the data passed to tile component
const tileData = new Tile(tileName, imageNormal, imageHover, imageDisabled, hoverColor, isEnabled, isConnected, metadata);
```

```html
<fbx-tile :tile="tileData"></fbx-tile>
```

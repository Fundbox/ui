# FbxTile
The general fundbox tile.

Used mainly inside grid.

<br>
<br>

## The `Tile` Constructor
This component exposes a `Tile` class which you should use to construct the tiles.

You will need to pass three type of  `<image/>.src` valid strings to this `Tile` constructor. You must supply normal, hover and disabled images. 
```js
// Use the `Tile` constructor to create the data passed to tile component
const tileData = new Tile(tileName, imageNormal, imageHover, imageDisabled, hoverColor, isEnabled, isConnected, metadata);
```

```html
<fbx-tile :tile="tileData"></fbx-tile>
```

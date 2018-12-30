# FbxTileGrid
A tile grid component. 
will render a grid based on your column count definition.
Provides callbacks for click.
Animations based on images in assets.

<br>
<br>

# The `Tile` Constructor
This component exposes a `Tile` class which you should use to construct the tiles.

You will need to pass three type of  `<image/>.src` valid strings to this `Tile` constructor. You must supply normal, hover and disabled images. 
```js
const tiles = [
    new Tile( 'WellsFargo', <IMAGE_NORMAL>, <IMAGE_HOVER>, <IMAGE_DISABLED>, <HOVER_COLOR>, <IS_ENABELD>, <IS_CONNECTED>, <METADATA>),
    new Tile( 'Chase', <IMAGE_NORMAL>, <IMAGE_HOVER>, <IMAGE_DISABLED>, <HOVER_COLOR>, <IS_ENABELD>, <IS_CONNECTED>, <METADATA>),
    new Tile( 'BankOfAmerica', <IMAGE_NORMAL>, <IMAGE_HOVER>, <IMAGE_DISABLED>, <HOVER_COLOR>, <IS_ENABELD>, <IS_CONNECTED>, <METADATA>),
  ...
]
```

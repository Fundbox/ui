import { Tile } from '../FbxTile/models/Tile'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { number as numberKnob, boolean as booleanKnob, object as objectKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import FbxTileGrid from './FbxTileGrid.vue'
import summary from './FbxTileGrid.md'
import * as images from './story-assets'

const stories = storiesOf('Components/TileGrid', module)
const withSummary = withInfo({ summary })

const tileData = [
  new Tile('WellsFargo', images.img5Normal, images.img5Hover, images.img5Disabled),
  new Tile('UnionBank', images.img459Normal, images.img459Hover, images.img459Disabled),
  new Tile('UsBank', images.img524Normal, images.img524Hover, images.img524Disabled),
  new Tile('Chase', images.img643Normal, images.img643Hover, images.img643Disabled),
  new Tile('FifthThirdBank', images.img745Normal, images.img745Hover, images.img745Disabled),
  new Tile('Huntington', images.img782Normal, images.img782Hover, images.img782Disabled),
  new Tile('Regions', images.img783Normal, images.img783Hover, images.img783Disabled),
  new Tile('CitiBank', images.img1603Normal, images.img1603Hover, images.img1603Disabled),
  new Tile('PncBank', images.img2162Normal, images.img2162Hover, images.img2162Disabled),
]

function defaultStory() {
  return {
    data() {
      const numberOfTilesKnob = numberKnob('Number of tiles', tileData.length)
      const tileDataKnobed = tileData
        .map(tile => objectKnob(tile.name, tile))
        .map(tile => {
          if (tile instanceof Tile) {
            return tile
          } else {
            return new Tile(tile.name, tile.imgNormal, tile.imgHover, tile.imgDisabled, tile.hoverColor, tile.isEnabled, tile.isConnected, tile.metadata)
          }
        })
      return {
        tileData: tileDataKnobed.slice(0, numberOfTilesKnob),
      }
    },
    components: { FbxTileGrid },
    template: `
      <div style="background: #f7f8f8; padding: 20px; resize: horizontal; overflow: auto; border: 2px solid #d8d8d8">
        <fbx-tile-grid :columns="${numberKnob('Columns', 3)}" 
                       :tile-data="tileData"
                       :should-show-placeholders="${booleanKnob('Show placeholders', false)}"
                       :on-click="onClick"
                       >
        </fbx-tile-grid>
      </div>
    `,
    methods: {
      onClick: action('Tile was clicked')
    }
  }
}

stories.add('default', withSummary(defaultStory))

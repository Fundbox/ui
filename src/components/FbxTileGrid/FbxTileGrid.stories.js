import { Tile } from './Tile'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import { number as numberKnob, boolean as booleanKnob, object as objectKnob } from '@storybook/addon-knobs'
import FbxTileGrid from './FbxTileGrid.vue'
import summary from './FbxTileGrid.md'

import img5Normal from './story-assets/5_colored.svg'
import img5Hover from './story-assets/5_white.svg'
import img5Disabled from './story-assets/5_greyed.svg'
import img459Normal from './story-assets/459_colored.svg'
import img459Hover from './story-assets/459_white.svg'
import img459Disabled from './story-assets/459_greyed.svg'
import img524Normal from './story-assets/524_colored.svg'
import img524Hover from './story-assets/524_white.svg'
import img524Disabled from './story-assets/524_greyed.svg'
import img643Normal from './story-assets/643_colored.svg'
import img643Hover from './story-assets/643_white.svg'
import img643Disabled from './story-assets/643_greyed.svg'
import img745Normal from './story-assets/745_colored.svg'
import img745Hover from './story-assets/745_white.svg'
import img745Disabled from './story-assets/745_greyed.svg'
import img782Normal from './story-assets/782_colored.svg'
import img782Hover from './story-assets/782_white.svg'
import img782Disabled from './story-assets/782_greyed.svg'
import img783Normal from './story-assets/783_colored.svg'
import img783Hover from './story-assets/783_white.svg'
import img783Disabled from './story-assets/783_greyed.svg'
import img1603Normal from './story-assets/1603_colored.svg'
import img1603Hover from './story-assets/1603_white.svg'
import img1603Disabled from './story-assets/1603_greyed.svg'
import img2162Normal from './story-assets/2162_colored.svg'
import img2162Hover from './story-assets/2162_white.svg'
import img2162Disabled from './story-assets/2162_greyed.svg'

const stories = storiesOf('Components/TileGrid', module)
const withSummary = withInfo({ summary })

const tileData = [
  new Tile('WellsFargo', img5Normal, img5Hover, img5Disabled),
  new Tile('UnionBank', img459Normal, img459Hover, img459Disabled),
  new Tile('UsBank', img524Normal, img524Hover, img524Disabled),
  new Tile('Chase', img643Normal, img643Hover, img643Disabled),
  new Tile('FifthThirdBank', img745Normal, img745Hover, img745Disabled),
  new Tile('Huntington', img782Normal, img782Hover, img782Disabled),
  new Tile('Regions', img783Normal, img783Hover, img783Disabled),
  new Tile('CitiBank', img1603Normal, img1603Hover, img1603Disabled),
  new Tile('PncBank', img2162Normal, img2162Hover, img2162Disabled),
]

function defaultStory() {
  return {
    data() {
      const numberOfTilesKnob = numberKnob('Number of tiles', tileData.length)
      const tileDataKnobed = tileData.map(tile => objectKnob(tile.name, tile))
      return {
        tileData: tileDataKnobed.slice(0, numberOfTilesKnob),
      }
    },
    components: { FbxTileGrid },
    template: `
      <div style="background: #f7f8f8; padding: 1rem">
        <fbx-tile-grid :columns="${ numberKnob('Columns', 3) }" 
                       :tile-data="tileData"
                       :should-show-placeholders="${ booleanKnob('Show placeholders', false) }"
                       >
        </fbx-tile-grid>
      </div>
    `,
  }
}

stories.add('default', withSummary(defaultStory))

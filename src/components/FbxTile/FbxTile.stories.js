import { Tile } from '../FbxTileGrid/Tile'
import { boolean as booleanKnob, object as objectKnob, text as textKnob } from '@storybook/addon-knobs'
import * as images from './story-assets'
import { storiesOf } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'
import FbxTile from './FbxTile.vue'
import summary from './FbxTile.md'

const stories = storiesOf('Components/Tile', module)
const withSummary = withInfo({ summary })

function defaultStory() {
  // Knobs:
  const tileName = textKnob('Tile Title:', 'WellsFargo')
  const imageNormal = textKnob('Image normal:', images.img5Normal)
  const imageHover = textKnob('Image hover:', images.img5Hover)
  const imageDisabled = textKnob('Image disabled:', images.img5Disabled)
  const hoverColor = textKnob('Tile hover color:')
  const isEnabled = booleanKnob('Tile is enabled:', true)
  const isConnected = booleanKnob('Tile is connected:', false)
  const metadata = objectKnob('Metadata:', {})

  return {
    components: { FbxTile },
    data() {
      return {
        tileData: new Tile(tileName, imageNormal, imageHover, imageDisabled, hoverColor, isEnabled, isConnected, metadata),
        containerStyle: {
          height: '100px',
          width: '150px',
          background: '#eeeeee',
          overflow: 'auto',
          padding: '15px',
          resize: 'both',
        },
      }
    },
    template: `
      <div :style="containerStyle">
        <fbx-tile :tile="tileData"></fbx-tile>
      </div>
    `,
  }
}

stories.add('default', withSummary(defaultStory))

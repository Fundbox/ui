import { shallowMount } from '@vue/test-utils'
import FbxTile from './FbxTile.vue'
import { Tile } from '../FbxTileGrid'

const images = {
  normal: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO 9TXL0Y4OHwAAAABJRU5ErkJggg==',
  hover: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO 9TXL0Y4OHwAAAABJRU5ErkJggg==',
  disabled: 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO 9TXL0Y4OHwAAAABJRU5ErkJggg==',
}

describe('Components/FbxTile', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled),
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders connected correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, undefined, undefined, true),
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders disabled correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, undefined, false),
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders connected disabled correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, undefined, false, true),
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders placeholder correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile(),
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders hover correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, 'red'),
        }
      })
      wrapper.trigger('mouseenter')
      expect(wrapper.html()).toMatchSnapshot()
      wrapper.trigger('mouseleave')
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders disabled hover correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, 'red', false),
        }
      })
      wrapper.trigger('mouseenter')
      expect(wrapper.html()).toMatchSnapshot()
      wrapper.trigger('mouseleave')
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('validators', () => {
    it('tile is instance of `Tile`', () => {
      const wrapper = shallowMount(FbxTile, {
        propsData: {
          tile: new Tile('tileName', images.normal, images.hover, images.disabled, 'red'),
        },
      })
      const tilePropValidator = wrapper.vm.$options.props.tile.validator
      expect(tilePropValidator(1)).toBeFalsy()
      expect(tilePropValidator(new Tile('tileName', images.normal, images.hover, images.disabled, 'red'),)).toBeTruthy()
    })
  })
})

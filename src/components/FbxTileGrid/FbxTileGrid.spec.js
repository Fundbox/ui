import { shallowMount } from '@vue/test-utils'
import FbxTileGrid from './FbxTileGrid.vue'
import { Tile } from './Tile'
import * as utils from './../../utils'

const genMockTileData = () => [
  new Tile('WellsFargo', 'story-assets/5_colored.svg', 'story-assets/5_white.svg', 'story-assets/5_white.svg'),
  new Tile('UnionBank', 'story-assets/459_colored.svg', 'story-assets/459_white.svg', 'story-assets/459_white.svg'),
  new Tile('UsBank', 'story-assets/524_colored.svg', 'story-assets/524_white.svg', 'story-assets/524_white.svg'),
  new Tile('Chase', 'story-assets/643_colored.svg', 'story-assets/643_white.svg', 'story-assets/643_white.svg'),
  new Tile('FifthThirdBank', 'story-assets/745_colored.svg', 'story-assets/745_white.svg', 'story-assets/745_white.svg'),
  new Tile('Huntington', 'story-assets/782_colored.svg', 'story-assets/782_white.svg', 'story-assets/782_white.svg'),
  new Tile('Regions', 'story-assets/783_colored.svg', 'story-assets/783_white.svg', 'story-assets/783_white.svg'),
  new Tile('CitiBank', 'story-assets/1603_colored.svg', 'story-assets/1603_white.svg', 'story-assets/1603_white.svg'),
  new Tile('PncBank', 'story-assets/2162_colored.svg', 'story-assets/2162_white.svg', 'story-assets/2162_white.svg'),
]

const tileClass = '.tile-wrapper'
const getNthTile = (wrapper, n = 1) => wrapper.find(`${tileClass}:nth-of-type(${n})`)

describe('Components/FbxTileGrid', () => {
  beforeEach(() => {
    // We re-assign a new noop function on each run to reset the function count
    utils.noop = jest.fn()
  })

  describe('snapshots', () => {
    it('renders 3 columns correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData(),
          columns: 3,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders one column correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData().slice(0, 3),
          columns: 1,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders disabled tile correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData().map((tile, i) => {
            tile.isEnabled = i !== 0
            return tile
          }),
          columns: 3,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders connected tile correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData().map((tile, i) => {
            tile.isConnected = i === 1
            return tile
          }),
          columns: 3,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders hover correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData().map((tile, i) => {
            switch (i) {
              case 0:
                tile.isEnabled = false
                break
              case 1:
                tile.hoverColor = 'red'
                break
            }
            return tile
          }),
          columns: 3,
        }
      })
      getNthTile(wrapper).trigger('mouseenter')
      expect(wrapper.html()).toMatchSnapshot()
      getNthTile(wrapper).trigger('mouseleave')
      expect(wrapper.html()).toMatchSnapshot()
      getNthTile(wrapper, 2).trigger('mouseenter')
      expect(wrapper.html()).toMatchSnapshot()
      getNthTile(wrapper, 2).trigger('mouseleave')
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders placeholders correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData().slice(0, 8),
          columns: 3,
          shouldShowPlaceholders: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders NO placeholders when exactly fit in column correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData(),
          columns: 3,
          shouldShowPlaceholders: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('@events', () => {
    it('trigger onClick callback', () => {
      const mockClick = jest.fn()
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData(),
          columns: 3,
          onClick: mockClick,
        }
      })

      wrapper.find(`${tileClass}:first-of-type`).trigger('click')
      expect(mockClick).toHaveBeenCalledTimes(1)
      expect(mockClick.mock.calls[0][0]).toBeInstanceOf(Tile)
    })

    it('Check default callback (no callback passed)', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData: genMockTileData(),
          columns: 3,
        }
      })
      getNthTile(wrapper).trigger('click')
      expect(utils.noop).toHaveBeenCalledTimes(1)
    })
  })
})

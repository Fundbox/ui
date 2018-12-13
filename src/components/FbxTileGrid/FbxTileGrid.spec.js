import { shallowMount } from '@vue/test-utils'
import FbxTileGrid from './FbxTileGrid.vue'
import { Tile } from './Tile'
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

describe('Components/FbxTileGrid', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        propsData: {
          tileData,
          columns: 3,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

describe('FbxButton', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxButton, {
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders loading correctly', () => {
      const wrapper = shallowMount(FbxButton, {
        propsData: { loading: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders inverse correctly', () => {
      const wrapper = shallowMount(FbxButton, {
        propsData: { inverse: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('@events', () => {
    it('listens to any event listener you pass', () => {
      const mockClick = jest.fn()
      const mockHover = jest.fn()
      const wrapper = shallowMount(FbxButton, {
        listeners: {
          click: mockClick,
          hover: mockHover,
        }
      })

      wrapper.trigger('click')
      wrapper.trigger('hover')

      expect(mockClick).toHaveBeenCalledTimes(1)
      expect(mockHover).toHaveBeenCalledTimes(1)
    })
  })

  describe('disabled', () => {
    it('prohibits clicking again while loading', () => {
      const mockClick = jest.fn()
      const wrapper = shallowMount(FbxButton, {
        listeners: {
          click: mockClick,
        },
        slots: defaultSlot,
      })

      wrapper.trigger('click')
      wrapper.setProps({ loading: true })
      expect(mockClick).toHaveBeenCalledTimes(1)

      wrapper.trigger('click')
      expect(mockClick).toHaveBeenCalledTimes(1)

      wrapper.setProps({ loading: false })
      wrapper.trigger('click')
      expect(mockClick).toHaveBeenCalledTimes(2)
    })
  })
})

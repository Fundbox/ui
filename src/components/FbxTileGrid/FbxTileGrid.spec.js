import { shallowMount } from '@vue/test-utils'
import FbxTileGrid from './FbxTileGrid.vue'

describe('Components/FbxTileGrid', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTileGrid, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

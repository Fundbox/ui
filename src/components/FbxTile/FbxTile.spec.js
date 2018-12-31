import { shallowMount } from '@vue/test-utils'
import FbxTile from './FbxTile.vue'

describe('Components/FbxTile', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTile, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

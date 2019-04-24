import { shallowMount } from '@vue/test-utils'
import FbxLogo from './FbxLogo.vue'

describe('Components/FbxLogo', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxLogo, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

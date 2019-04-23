import { shallowMount } from '@vue/test-utils'
import FbxDropdown from './FbxDropdown.vue'

describe('Components/FbxDropdown', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxDropdown, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

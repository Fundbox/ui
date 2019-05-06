import { shallowMount } from '@vue/test-utils'
import FbxSafeAndSecure from './FbxSafeAndSecure.vue'

describe('Components/FbxSafeAndSecure', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxSafeAndSecure, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

import { shallowMount } from '@vue/test-utils'
import FbxModalWrapper from './FbxModalWrapper.vue'

describe('Components/FbxModalWrapper', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

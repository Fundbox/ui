import { shallowMount } from '@vue/test-utils'
import FbxNotice from './FbxNotice.vue'

describe('Components/FbxNotice', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxNotice, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

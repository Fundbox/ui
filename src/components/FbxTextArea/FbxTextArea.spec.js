import { shallowMount } from '@vue/test-utils'
import FbxTextArea from './FbxTextArea.vue'

describe('Components/FbxTextArea', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTextArea, {
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

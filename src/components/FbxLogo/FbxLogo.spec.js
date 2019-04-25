import { shallowMount } from '@vue/test-utils'
import FbxLogo from './FbxLogo.vue'

describe('Components/FbxLogo', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxLogo, {})
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders without text', () => {
      const wrapper = shallowMount(FbxLogo, {
        props: {
          withText: false,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

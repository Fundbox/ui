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
          withoutText: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders vertical logo', () => {
      const wrapper = shallowMount(FbxLogo, {
        props: {
          vertical: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders fundbox pay logo', () => {
      const wrapper = shallowMount(FbxLogo, {
        props: {
          payLogo: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders fundbox pay logo vertically', () => {
      const wrapper = shallowMount(FbxLogo, {
        props: {
          payLogo: true,
          vertical: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

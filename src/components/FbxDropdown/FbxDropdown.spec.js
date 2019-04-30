import { shallowMount } from '@vue/test-utils'
import FbxDropdown from './FbxDropdown.vue'

describe('Components/FbxDropdown', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxDropdown, {})
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders menu with text', () => {
      const wrapper = shallowMount(FbxDropdown, {
        props: {
          menuText: 'menu text',
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders the open menu', () => {
      const wrapper = shallowMount(FbxDropdown, {})
      wrapper.find('.drop-down-button').trigger('click')
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('menu closed when clicked outside',(done) => {
      const wrapper = shallowMount(FbxDropdown, {})
      wrapper.find('.drop-down-button').trigger('click')
      wrapper.find('.drop-down-button').trigger('focusout')
      setTimeout(() => {
        expect(wrapper.html()).toMatchSnapshot()
        done()
      }, 500)
    })
  })
})

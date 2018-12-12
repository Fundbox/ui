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

    it('renders with loading correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        propsData: {
          isLoading: true
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders without title correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        propsData: {
          title: undefined
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

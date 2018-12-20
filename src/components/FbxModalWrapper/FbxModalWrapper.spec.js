import { shallowMount } from '@vue/test-utils'
import FbxModalWrapper from './FbxModalWrapper.vue'
import VeeValidate from 'vee-validate'

const v = new VeeValidate.Validator()

describe('Components/FbxModalWrapper', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        propsData: {
          title: 'snapshot title'
        },
        provide: () => ({
          $validator: v
        })
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with loading correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        propsData: {
          isLoading: true,
          title: 'snapshot title'
        },
        provide: () => ({
          $validator: v
        })
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders without title correctly', () => {
      const wrapper = shallowMount(FbxModalWrapper, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
        provide: () => ({
          $validator: v
        })
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

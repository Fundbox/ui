import { shallowMount } from '@vue/test-utils'
import FbxStepper from './FbxStepper.vue'

const steps = ['step one','step two','step three']

describe('Components/FbxStepper', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxStepper, {
        propsData: {
          steps,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders active state correctly', () => {
      const wrapper = shallowMount(FbxStepper, {
        propsData: {
          steps,
          activeStep: 1,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

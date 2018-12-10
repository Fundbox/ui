import { shallowMount } from '@vue/test-utils'
import FbxIosSwitchButton from './FbxIosSwitchButton.vue'

describe('Components/FbxIosSwitchButton', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxIosSwitchButton, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
    it('renders the component correctly when component value is different than default state which is false', () => {
      const wrapper = shallowMount(FbxIosSwitchButton, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      wrapper.setProps({ value: true })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

import { shallowMount } from '@vue/test-utils'
import FbxTrustPilotBox from './FbxTrustPilotBox.vue'

describe('Components/FbxTrustPilotBox', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTrustPilotBox, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
        propsData: {
          templateId: 'ddd',
          businessunitId: 'dds',
          fallbackLink: 'ddsd'
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

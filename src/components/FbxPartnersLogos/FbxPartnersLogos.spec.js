import { shallowMount } from '@vue/test-utils'
import FbxPartnersLogos from './FbxPartnersLogos.vue'

describe('Components/FbxPartnersLogos', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxPartnersLogos, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

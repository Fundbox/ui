import { shallowMount, createLocalVue } from '@vue/test-utils'
import FbxTextField from './FbxTextField.vue'

describe('FbxTextField', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTextField, {
        propsData: {
          value: 'avocado',
          label: 'Favorite Food',
        },
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

import { shallowMount } from '@vue/test-utils'
import FbxTextArea from './FbxTextArea.vue'

describe('Components/FbxTextArea', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          name: 'my-text-area',
          value: 'avocado',
        },
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a label', () => {
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          name: 'my-text-area',
          label: 'Order Details',
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a resize value', () => {
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          name: 'my-text-area',
          resize: 'both',
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a character counter', () => {
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          name: 'my-text-area',
          maxCount: 20,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('charCount', () => {
    it('is 0 if there is no value length', () => {
      const text = 'I am text'
      const wrapper = shallowMount(FbxTextArea, {})

      expect(wrapper.vm.charCount).toBe(0)
    })

    it('sets the current character count to the length of the value', () => {
      const text = 'I am text'
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          value: text,
        },
      })

      expect(wrapper.vm.charCount).toBe(text.length)
    })
  })

  describe('hasReachedMaxChars', () => {
    it('returns true if the user has entered text that is too long', () => {
      const text = 'I am text'
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          maxCount: text.length,
          value: text,
        },
      })

      expect(wrapper.vm.hasReachedMaxChars).toBe(true)
    })
  })
})

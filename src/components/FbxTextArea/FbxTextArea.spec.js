import { shallowMount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import FbxTextArea from './FbxTextArea.vue'

const localVue = createLocalVue()

describe('Components/FbxTextArea', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        propsData: {
          name: 'my-text-area',
          value: 'avocado',
        },
        localVue,
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a label', () => {
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        propsData: {
          name: 'my-text-area',
          label: 'Order Details',
        },
        localVue,
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a resize value', () => {
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        propsData: {
          name: 'my-text-area',
          resize: 'both',
        },
        localVue,
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a character counter', () => {
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        propsData: {
          name: 'my-text-area',
          maxCount: 20,
        },
        localVue,
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with a validation message', async () => {
      const validationMessage = 'This field is required'
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        attrs: {
          name: 'my-text-area',
        },
        props: {
          validations: 'required',
        },
        mocks: {
          errors: {
            has: () => true,
            first: () => validationMessage,
          }
        },
        localVue,
      })
      await flushPromises()
      expect(wrapper.html()).toMatchSnapshot()
      expect(wrapper.html()).toContain(validationMessage)
    })
  })

  describe('charCount', () => {
    it('is 0 if there is no value length', () => {
      const wrapper = shallowMount(FbxTextArea, {
        propsData: {
          name: 'my-text-area',
        },
      })

      expect(wrapper.vm.charCount).toBe(0)
    })

    it('sets the current character count to the length of the value', () => {
      const text = 'I am text'
      const wrapper = shallowMount(FbxTextArea, {
        sync: false,
        attrs: {
          name: 'my-text-area',
        },
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
        sync: false,
        attrs: {
          name: 'my-text-area',
        },
        propsData: {
          maxCount: text.length,
          value: text,
        },
      })

      expect(wrapper.vm.hasReachedMaxChars).toBe(true)
    })
  })
})

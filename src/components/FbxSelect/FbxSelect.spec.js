import { shallowMount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import VeeValidate from 'vee-validate'
import FbxSelect from './FbxSelect.vue'

const option1 = 'Option 1'
const option2 = 'Option 2'
const defaultSlot = {
  default: `
    <option>Default</option>
    <option value="${option1}">${option1}</option>
    <option value="${option2}">${option2}</option>
  `
}

const localVue = createLocalVue()
localVue.use(VeeValidate, {
  events: 'change'
})

describe('FbxSelect', () => {
  describe('snapshots', () => {
    it('renders the default correctly', async () => {
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select',
        },
        // running async test because of vee-validate and @vue/test-utils
        // Here are the reffs:
        // https://github.com/baianat/vee-validate/issues/1267
        // https://github.com/baianat/vee-validate/issues/1432
        sync: false,
        localVue
      })
      await flushPromises()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders validations correctly', async () => {
      const validationMessage = 'This field is required'
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select'
        },
        props: {
          validations: 'required'
        },
        mocks: {
          errors: {
            has: () => true,
            first: () => validationMessage,
          }
        },
        sync: false,
        localVue
      })
      await flushPromises()
      expect(wrapper.html()).toMatchSnapshot()
      expect(wrapper.html()).toContain(validationMessage)
    })
  })

  describe('initialization', () => {
    it('sets correct value by passing value attr', async () => {
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select',
          value: option1,
        },
        sync: false,
        localVue
      })
      await flushPromises()
      const select = wrapper.find('select')
      const options = select.findAll('option')
      const selectedOption = options.at(select.element.selectedIndex)
      expect(selectedOption.text()).toEqual(option1)
    })
  })

  describe('events', () => {
    it('calls input event with selected value on value select', () => {
      const mockInput = jest.fn()
      const mockChange = jest.fn()
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select'
        },
        listeners: {
          change: mockChange,
          input: mockInput,
        },
        sync: false,
        localVue
      })
      const selectWrapper = wrapper.find('select')
      const options = selectWrapper.findAll('option')

      options.at(1).setSelected()
      expect(mockChange).toHaveBeenCalledTimes(1)
      expect(mockChange).toHaveBeenCalledWith(option1)

      options.at(2).element.selected = true
      options.at(2).trigger('input')
      expect(mockInput).toHaveBeenCalledTimes(1)
      expect(mockInput).toHaveBeenCalledWith(option2)
    })

    it('calls regular events of select', () => {
      const mockClick = jest.fn()
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select'
        },
        listeners: {
          click: mockClick,
        },
        sync: false,
        localVue
      })
      const select = wrapper.find('select')
      select.trigger('click')
      expect(mockClick).toHaveBeenCalledTimes(1)
    })
  })
})

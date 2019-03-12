import { shallowMount, createLocalVue } from '@vue/test-utils'
import VeeValidate from 'vee-validate'
import FbxSelect from './FbxSelect.vue'

const option1 = 'Option 1'
const defaultSlot = {
  default: `
    <option>Default</option>
    <option value="${option1}">${option1}</option>
  `
}

const localVue = createLocalVue()
localVue.use(VeeValidate, {
  events: 'change'
})

describe('FbxSelect', () => {
  describe('snapshots', () => {
    it('renders the default correctly', async() => {
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
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders validations correctly', async() => {
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
      await wrapper.vm.$nextTick()
      expect(wrapper.html()).toMatchSnapshot()
      expect(wrapper.html()).toContain(validationMessage)
    })
  })

  describe('initialization', () => {
    it('sets correct value by passing value attr', async() => {
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select',
          value: option1,
        },
        sync: false,
        localVue
      })
      await wrapper.vm.$nextTick()
      // promise.then(() => {
      const select = wrapper.find('select')
      const options = select.findAll('option')
      const selectedOption = options.at(select.element.selectedIndex)
      expect(selectedOption.text()).toEqual(option1)
      //   done()
      // })
    })
  })

  describe('events', () => {
    it('calls input event with selected value on value select', () => {
      const mockInput = jest.fn()
      const wrapper = shallowMount(FbxSelect, {
        slots: defaultSlot,
        attrs: {
          name: 'select'
        },
        listeners: {
          input: mockInput,
        },
        sync: false,
        localVue
      })
      const options = wrapper.find('select').findAll('option')
      options.at(1).setSelected()
      expect(mockInput).toHaveBeenCalledTimes(1)
      expect(mockInput).toHaveBeenCalledWith(option1)
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

import { shallowMount } from '@vue/test-utils'
import FbxTextField from './FbxTextField.vue'
import VeeValidate from 'vee-validate'

const v = new VeeValidate.Validator()

describe('FbxTextField', () => {
  describe('snapshots', () => {
    it('renders the default', () => {
      const wrapper = shallowMount(FbxTextField, {
        propsData: {
          name: 'my-input',
          value: 'avocado',
          label: 'Favorite Food',
        },
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders clear icon', () => {
      const wrapper = shallowMount(FbxTextField, {
        propsData: {
          name: 'my-input',
          value: 'avocado',
          clearIcon: true,
        },
        provide: () => ({
          $validator: v
        })
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('methods', () => {
    describe('togglePassword', () => {
      it('changes the input type from password to text', () => {
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            name: 'my-input',
            value: 'avocado',
            type: 'text',
          },
        })

        wrapper.setData({
          type: 'password',
        })

        expect(wrapper.vm.type).toBe('password')

        wrapper.vm.togglePassword()

        expect(wrapper.vm.type).toBe('text')
      })

      it('changes the input type from text to password', () => {
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            name: 'my-input',
            value: 'avocado',
            type: 'text',
          },
        })
        expect(wrapper.vm.type).toBe('text')

        wrapper.vm.togglePassword()

        expect(wrapper.vm.type).toBe('password')
      })
    })

    describe('clearField', () => {
      it('emits an input event with an empty string', () => {
        const mockOnInput = jest.fn()
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            name: 'my-input',
            value: '42',
          },
          listeners: {
            input: mockOnInput,
          },
        })

        wrapper.vm.clearField()

        expect(mockOnInput).toHaveBeenCalled()
        expect(mockOnInput).toHaveBeenCalledWith('')
      })
    })

    describe('onInput', () => {
      it('emits the change event with the input value', () => {
        const mockOnInput = jest.fn()
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            name: 'my-input',
            value: '42',
          },
          listeners: {
            input: mockOnInput,
          },
        })

        wrapper.find('input').trigger('input')

        expect(mockOnInput).toHaveBeenCalled()
        expect(mockOnInput).toHaveBeenCalledWith('42')
      })
    })

    describe('onChange', () => {
      it('emits the change event with the input value', () => {
        const mockOnChange = jest.fn()
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            name: 'my-input',
            value: '42',
          },
          listeners: {
            change: mockOnChange,
          },
        })

        wrapper.find('input').trigger('change')

        expect(mockOnChange).toHaveBeenCalledTimes(1)
        expect(mockOnChange).toHaveBeenCalledWith('42')
      })
    })
  })
})

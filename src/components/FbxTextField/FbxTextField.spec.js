import { shallowMount } from '@vue/test-utils'
import FbxTextField from './FbxTextField.vue'

describe('FbxTextField', () => {
  describe('snapshots', () => {
    it('renders the default', () => {
      const wrapper = shallowMount(FbxTextField, {
        propsData: {
          value: 'avocado',
          label: 'Favorite Food',
        },
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

  describe('methods', () => {
    describe('togglePassword', () => {
      it('changes the input type from password to text', () => {
        const wrapper = shallowMount(FbxTextField, {
          sync: false,
          propsData: {
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
            value: 'avocado',
            type: 'text',
          },
        })
        expect(wrapper.vm.type).toBe('text')

        wrapper.vm.togglePassword()

        expect(wrapper.vm.type).toBe('password')
      })
    })

    describe('onInput', () => {
      it('emits the change event with the input value', () => {
        const mockOnInput = jest.fn()
        const wrapper = shallowMount(FbxTextField, {
          propsData: {
            value: '42',
          },
          listeners: {
            input: mockOnInput,
          }
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
            value: '42',
          },
          listeners: {
            change: mockOnChange,
          }
        })

        wrapper.find('input').trigger('change')

        expect(mockOnChange).toHaveBeenCalledTimes(1)
        expect(mockOnChange).toHaveBeenCalledWith('42')
      })
    })
  })
})

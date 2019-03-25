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
          clearable: true,
        },
        provide: () => ({
          $validator: v
        })
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    // TODO(nlitwin): test currently broken due to sync bug
    // https://github.com/vuejs/vue-test-utils/issues/829
    it.skip('renders a currency mask', (done) => {
      const wrapper = shallowMount(FbxTextField, {
        sync: false,
        propsData: {
          name: 'my-input',
          value: '12879.25',
          currency: true,
        },
      })
      wrapper.vm.$nextTick(() => {
        expect(wrapper.html()).toMatchSnapshot()
        done()
      })
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

    // TODO(nlitwin): test currently broken due to sync bug
    // https://github.com/vuejs/vue-test-utils/issues/829
    describe('onCurrencyInput', () => {
      it.skip('emits the change event with the input value', () => {
        const mockOnInput = jest.fn()
        const wrapper = shallowMount(FbxTextField, {
          sync: false,
          propsData: {
            name: 'my-input',
            value: '12879.25',
            currency: true,
          },
          listeners: {
            input: mockOnInput,
          },
        })

        wrapper.find('input').trigger('input')

        expect(mockOnInput).toHaveBeenCalled()
        expect(mockOnInput).toHaveBeenCalledWith('12,879.25')
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

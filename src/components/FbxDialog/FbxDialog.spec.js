import { shallowMount, createLocalVue } from '@vue/test-utils'
import FbxDialog from './FbxDialog.vue'

const localVue = createLocalVue()

describe('Components/FbxDialog', () => {
  let mountOptions

  beforeEach(() => {
    mountOptions = {
      localVue,
      stubs: ['fbx-button', 'fbx-close-button'],
      propsData: {
        // Mock values that VuejsDialogMixin adds
        options: {
          message: {
            title: 'The dialog title',
            body: 'The dialog body',
          },
          okText: 'Confirm',
          cancelText: 'Cancel',
          promiseResolver: jest.fn(),
          promiseRejecter: jest.fn(),
        },
      },
    }
  })

  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxDialog, mountOptions)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('handleProceed', () => {
    it('calls the proceed method from vuejs-dialog', () => {
      const wrapper = shallowMount(FbxDialog, mountOptions)
      wrapper.setMethods({
        proceed: jest.fn(),
      })

      wrapper.vm.handleProceed()

      expect(wrapper.vm.proceed).toHaveBeenCalled()
    })
  })

  describe('handleDismiss', () => {
    it('calls the cancel method from vuejs-dialog', () => {
      const wrapper = shallowMount(FbxDialog, mountOptions)
      wrapper.setMethods({
        cancel: jest.fn(),
      })

      wrapper.vm.handleDismiss()

      expect(wrapper.vm.cancel).toHaveBeenCalled()
    })
  })
})

import { shallowMount } from '@vue/test-utils'
import FbxPrintLink from './FbxPrintLink.vue'

describe('Components/FbxPrintLink', () => {
  const printTitle = 'A title'
  const printContent = 'Some content'

  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          printTitle,
          printContent,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders without a print icon', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          printTitle,
          printContent,
          showPrintIcon: false,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('methodsprintTextContent', () => {
    it('prints the new document', () => {
      const focus = jest.fn()
      const print = jest.fn()

      window.open = jest.fn(() => {
        return {
          document: {
            documentElement: {
              innerHTML: '',
            },
          },
          focus,
          print,
        }
      })

      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          printTitle,
          printContent,
        },
        mocks: {
          $sanitize: text => text,
        },
      })

      wrapper.vm.printTextContent()

      const finalPrintContent = window.open.mock.results[0].value.document.documentElement.innerHTML
      expect(finalPrintContent).toContain('DOCTYPE')
      expect(finalPrintContent).toContain(printTitle)
      expect(finalPrintContent).toContain(printContent)
      expect(window.open).toHaveBeenCalledTimes(1)
      expect(focus).toHaveBeenCalledTimes(1)
      expect(print).toHaveBeenCalledTimes(1)
    })
  })
})

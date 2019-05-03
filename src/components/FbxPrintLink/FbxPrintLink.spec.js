import { shallowMount } from '@vue/test-utils'
import FbxPrintLink from './FbxPrintLink.vue'

describe('Components/FbxPrintLink', () => {
  const title = 'A title'
  const htmlContent = 'Some content'

  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          title,
          htmlContent,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders without a print icon', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          title,
          htmlContent,
          withIcon: false,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('onPrintButtonClick', () => {
    let focus
    let print

    beforeEach(() => {
      focus = jest.fn()
      print = jest.fn()

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
    })


    it('prints the new document', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          title,
          htmlContent,
        },
      })

      wrapper.vm.onPrintButtonClick()

      const finalPrintContent = window.open.mock.results[0].value.document.documentElement.innerHTML
      expect(finalPrintContent).toContain('DOCTYPE')
      expect(finalPrintContent).toContain(title)
      expect(finalPrintContent).toContain(htmlContent)
      expect(window.open).toHaveBeenCalledTimes(1)
      expect(focus).toHaveBeenCalledTimes(1)
      expect(print).toHaveBeenCalledTimes(1)
    })

    it('escapes the print title', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          title: '&',
          htmlContent,
        },
      })

      wrapper.vm.onPrintButtonClick()

      const finalPrintContent = window.open.mock.results[0].value.document.documentElement.innerHTML
      expect(finalPrintContent).toContain('&amp;')
    })

    it('sanitizes the print content print content', () => {
      const wrapper = shallowMount(FbxPrintLink, {
        propsData: {
          title,
          htmlContent: '<script>alert(42)</script>',
        },
      })

      wrapper.vm.onPrintButtonClick()

      const finalPrintContent = window.open.mock.results[0].value.document.documentElement.innerHTML
      expect(finalPrintContent).toContain('&lt;script&gt;')
    })
  })
})

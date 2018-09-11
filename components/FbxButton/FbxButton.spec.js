import { shallowMount } from "@vue/test-utils"
import FbxButton from "./FbxButton.vue"

const buttonText = "Submit"
const defaultSlot = { default: buttonText };

describe("FbxButton", () => {
  describe("snapshots", () => {
    it("renders the default correctly", () => {
      const wrapper = shallowMount(FbxButton, {
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it("renders loading correctly", () => {
      const wrapper = shallowMount(FbxButton, {
        propsData: { loading: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it("renders inverse correctly", () => {
      const wrapper = shallowMount(FbxButton, {
        propsData: { inverse: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe("@events", () => {
    it("listens to any event listener you pass", () => {
      const mockClick = jest.fn()
      const mockHover = jest.fn()
      const wrapper = shallowMount(FbxButton, {
        listeners: {
          click: mockClick,
          hover: mockHover,
        }
      })

      wrapper.trigger("click")
      wrapper.trigger("hover")

      expect(mockClick).toHaveBeenCalledTimes(1)
      expect(mockHover).toHaveBeenCalledTimes(1)
    })
  })

  describe("disabled", () => {
    it("prohibits clicking again while loading", () => {
      const mockClick = jest.fn()
      const wrapper = shallowMount(FbxButton, {
        listeners: {
          click: mockClick,
        },
        slots: defaultSlot,
      })

      wrapper.trigger("click")
      wrapper.setProps({ loading: true })
      expect(mockClick).toHaveBeenCalledTimes(1)

      wrapper.trigger("click")
      expect(mockClick).toHaveBeenCalledTimes(1)

      wrapper.setProps({ loading: false })
      wrapper.trigger("click")
      expect(mockClick).toHaveBeenCalledTimes(2)
    })
  })
})

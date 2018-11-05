import { shallowMount } from "@vue/test-utils"
import FbxPanelRadioButton from "../FbxPanelRadioButton"

const buttonText = "Submit"
const defaultHeaderSlot = { default: buttonText };
const defaultBodySlot = { default: buttonText };

describe("FbxPanelRadioButton", () => {
  describe("snapshots", () => {
    it("renders the default correctly", () => {
      const wrapper = shallowMount(FbxPanelRadioButton, {
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    xit("renders loading correctly", () => {
      const wrapper = shallowMount(FbxPanelRadioButton, {
        propsData: { loading: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    xit("renders inverse correctly", () => {
      const wrapper = shallowMount(FbxPanelRadioButton, {
        propsData: { inverse: true },
        slots: defaultSlot,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  xdescribe("@events", () => {
    it("listens to any event listener you pass", () => {
      const mockClick = jest.fn()
      const mockHover = jest.fn()
      const wrapper = shallowMount(FbxPanelRadioButton, {
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
})

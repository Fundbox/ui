import { shallowMount } from "@vue/test-utils"
import FbxPanelRadioButton from "../FbxPanelRadioButton"

const slots = {
  header: "<div>I am the <span>header</span> slot text</div>",
  body: "<div>I am the <strong>body</strong> slot text</div>",
}

describe("FbxPanelRadioButton", () => {
  describe("snapshots", () => {
    it("renders the default correctly", () => {
      const wrapper = shallowMount(FbxPanelRadioButton, {
        propsData: {
          iconPath: "../../assets/logo.png",
        },
        slots,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })

    it("renders without an iconPath correctly", () => {
      const wrapper = shallowMount(FbxPanelRadioButton, {
        slots,
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe("@events", () => {
    it("the @change event emits to the parent with the selected value", () => {
      const mockOnChange = jest.fn()
      const wrapper = shallowMount(FbxPanelRadioButton, {
        propsData: {
          value: "42",
        },
        listeners: {
          change: mockOnChange,
        }
      })

      wrapper.trigger("change")

      expect(mockOnChange).toHaveBeenCalledTimes(1)
      expect(mockOnChange).toHaveBeenCalledWith("42")
    })

    it("emits the @change event when you click the panel radio button", () => {
      const mockClick = jest.fn()
      const wrapper = shallowMount(FbxPanelRadioButton, {
        listeners: {
          change: mockClick,
        }
      })

      wrapper.trigger("click")

      expect(mockClick).toHaveBeenCalledTimes(1)
    })
  })
})

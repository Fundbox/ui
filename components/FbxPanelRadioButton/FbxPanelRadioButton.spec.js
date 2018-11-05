import { shallowMount } from "@vue/test-utils"
import FbxPanelRadioButton from "../FbxPanelRadioButton"

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

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
  })
})

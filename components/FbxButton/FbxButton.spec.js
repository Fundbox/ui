import { shallowMount } from "@vue/test-utils"
import FbxButton from "./FbxButton.vue"

const buttonText = "Submit"
const defaultSlot = { default: buttonText };

describe("FbxButton", () => {
  it("renders correctly", () => {
    const wrapper = shallowMount(FbxButton, { slots: defaultSlot })

    expect(wrapper.html()).toMatchSnapshot()
  })
})

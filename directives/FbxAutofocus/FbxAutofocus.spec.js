import { shallowMount } from "@vue/test-utils";
import "./FbxAutofocus";

describe("Directives/FbxAutofocus", () => {
  it("Should auto focus input element with `v-fbx-autofocus` directive", () => {
    const mockComponent = shallowMount({
      template: "<input v-fbx-autofocus>",
    });

    expect(mockComponent.contains("input:focus")).toBe(true);
  });

  it("Should auto focus input element with `v-fbx-autofocus` directive set to `false", () => {
    const mockComponent = shallowMount({
      template: "<input v-fbx-autofocus='false'>",
    });

    expect(mockComponent.contains("input:focus")).toBe(false);
  });
});

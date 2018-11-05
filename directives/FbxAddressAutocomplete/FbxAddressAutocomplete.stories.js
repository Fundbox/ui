import "../FbxAddressAutocomplete";
import "../../validations"
import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import summary from "./FbxAddressAutocomplete.md";

const stories = storiesOf("directives/Address Autocomplete", module);
const storyWithInfo = withInfo({ summary });

const defaultStory = () => ({
  data() {
    return { inputText: "" };
  },
  template: `<input v-fbx-address-autocomplete v-model="inputText" />`,
});

stories.add("default", storyWithInfo(defaultStory));

import { storiesOf } from "@storybook/vue";
import { withInfo } from "storybook-addon-vue-info";
import FbxTextField from "../../components/FbxTextField";
import FbxAutofocus from "./FbxAutofocus";
import summary from './FbxAutofocus.md';

const stories = storiesOf('directives/Autofocus', module);
const storyWithInfo = withInfo({ summary });

const defaultStory = () => ({
  directives: { FbxAutofocus },
  data() {
    return { value: "" };
  },
  template: `<input v-fbx-autofocus v-model="value" />`,
});

const textFieldStory = () => ({
  components: { FbxTextField },
  directives: { FbxAutofocus },
  data() {
    return { value: "" };
  },
  template: `<fbx-text-field autofocus v-model="value" />`,
});

stories.add('default', storyWithInfo(defaultStory));
stories.add('text field auto focus', storyWithInfo(textFieldStory));

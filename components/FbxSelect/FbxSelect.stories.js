import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { array } from '@storybook/addon-knobs';

import FbxSelect from './FbxSelect.vue';
import FbxButton from './../FbxButton/FbxButton.vue';
import summary from './FbxSelect.md';
const stories = storiesOf('Select', module);
const withSummary = withInfo({ summary });

const data = () => ({
  selected: "",
  options: array('Options', ['Option 1', 'Option 2', 'Option 3', 'Option 4']),
});

const watch = {
  selected (value) {
    action(`New selected value: ${value}`)()
  },
};

const defaultStory = {
  components: { FbxSelect },
  data,
  watch,
  template: `
  <div>
    <fbx-select v-model="selected">
      <option value="">Default</option>
      <option v-for="option in options" :value="option">{{ option }}</option>
    </fbx-select>
    <br/>
    <h3>Selected option: {{selected}}</h3>
  </div>
  `,
};
stories.add('default', withSummary(() => defaultStory));

const validationsStory = {
  components: { FbxSelect, FbxButton },
  data,
  watch,
  methods: {
    handleSubmit () {
      this.$validator.validate().then(valid => {
        if (valid) {
          action(`Submitted value: ${this.selected}`)()
        } else {
          action("Form is invalid. Submittion prevented.")()
        }
      });
    }
  },
  template: `
  <form @submit.prevent="handleSubmit">
    <fbx-select name="select" v-model="selected" validations="required">
      <option value="">Default</option>
      <option v-for="option in options" :value="option">{{ option }}</option>
    </fbx-select>
    <br/>
    <fbx-button type="submit">Submit</fbx-button>
    <br/>
    <h3>Selected option: {{selected}}</h3>
  </form>
  `,
};

stories.add('validations', withSummary(() => validationsStory));

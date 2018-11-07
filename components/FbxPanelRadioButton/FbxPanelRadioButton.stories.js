import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxPanelRadioButton from './FbxPanelRadioButton.vue';
import FbxButton from '../FbxButton';
import FbxValidationMessage from '../FbxValidationMessage';
import summary from './FbxPanelRadioButton.md';
import icon from '../../assets/logo.png';
import icon2 from '../../assets/icon_check_active.svg';
import icon3 from '../../assets/icon_check_disabled.svg';
import storyHTML from './FbxPanelRadioButton.stories.html';
import NoIconsStoryComponent from './FbxPanelRadioButton.NoIcons.story.vue';
import validationStoryHTML from './FbxPanelRadioButton-validation.stories.html';
import './FbxPanelRadioButton.stories.scss';

const stories = storiesOf('Components/PanelRadioButton', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxPanelRadioButton },
  data() {
    return {
      selectedDataSource: null,
      icon,
      icon2,
      icon3,
      headerText: text('Header Text', 'Caramels toffee  gummi bears'),
      bodyText: text('Text', 'Halvah chupa chups caramels sugar sugar plum ice cream wafer sugar pudding fruitcake snaps donut. lemon drops topping marshmallow sesame gummi bears sugar. biscuit dessert powder croissant jujubes powder chocolate tootsie topping.')
    }
  },
  template: storyHTML,
  methods: {
    onCoolChange: action('@change')
  },
})));

stories.add('without icons', () => NoIconsStoryComponent);
stories.add('with validation', () => ({
  components: { FbxPanelRadioButton, FbxValidationMessage, FbxButton },
  data() {
    return {
      selectedDataSource: null,
    }
  },
  computed: {
    isInvalid() {
      return this.errors.has("fbx-panel-radio-button")
    },
    validationMessage() {
      return this.errors.first("fbx-panel-radio-button")
    },
  },
  methods: {
    onSubmit() {
      this.$validator.validate().then(valid => {
        if (valid) {
          action(`Submitted value: ${this.selectedDataSource}`)()
        } else {
          action("Form is invalid. Nothing selected.")()
        }
      });
    },
    onReset() {
      this.selectedDataSource = null
    },
  },
  template: validationStoryHTML,
}));

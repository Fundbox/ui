import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { text } from '@storybook/addon-knobs';

import FbxPanelRadioButton from './FbxPanelRadioButton.vue';
import summary from './FbxPanelRadioButton.md';
import icon from '../assets/logo.png';
import icon2 from '../assets/icon_check_active.svg';
import storyHTML from './FbxPanelRadioButton.stories.html';
import './FbxPanelRadioButton.stories.scss';

const stories = storiesOf('PanelRadioButton', module);

// stories.add('default', withInfo({ summary })(() => ({
stories.add('default', () => ({
  components: { FbxPanelRadioButton },
  data() {
    return {
      selectedDataSource: null,
      icon,
      icon2,
      headerText: text('Header Text', 'Caramels toffee  gummi bears'),
      bodyText: text('Text', 'Halvah chupa chups caramels sugar sugar plum ice cream wafer sugar pudding fruitcake snaps donut. lemon drops topping marshmallow sesame gummi bears sugar. biscuit dessert powder croissant jujubes powder chocolate tootsie topping.')
    }
  },
  template: storyHTML,
  methods: { click: action('clicked') },
}));

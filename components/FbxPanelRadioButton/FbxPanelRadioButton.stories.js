import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

import summary from './FbxPanelRadioButton.md';
import DefaultStoryComponent from "./FbxPanelRadioButton.Default.story.js";
import NoIconsStoryComponent from './FbxPanelRadioButton.NoIcons.story.vue';
import WithValidationStoryComponent from './FbxPanelRadioButton.WithValidation.story.vue';
import './FbxPanelRadioButton.stories.scss';

const stories = storiesOf('Components/PanelRadioButton', module);

stories.add('default', withInfo({ summary })(() => DefaultStoryComponent));
stories.add('without icons', () => NoIconsStoryComponent);
stories.add('with validation', () => WithValidationStoryComponent);

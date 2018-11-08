import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

import './FbxPanelRadioButton.stories.scss';
import summary from './FbxPanelRadioButton.md';
import DynamicValuesStoryComponent from "./FbxPanelRadioButton.DynamicValues.story.vue";
import NoIconsStoryComponent from './FbxPanelRadioButton.NoIcons.story.vue';
import WithValidationStoryComponent from './FbxPanelRadioButton.WithValidation.story.vue';

const stories = storiesOf('Components/PanelRadioButton', module);

stories.add('default', withInfo({ summary })(() => DefaultStoryComponent));
stories.add('dynamic text and icons', () => DynamicValuesStoryComponent);
stories.add('without icons', () => NoIconsStoryComponent);
stories.add('with validation', () => WithValidationStoryComponent);

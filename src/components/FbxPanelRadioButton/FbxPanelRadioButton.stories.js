import { storiesOf } from '@storybook/vue';
import { doc } from 'storybook-readme';

import './stories/FbxPanelRadioButton.stories.scss';
import summary from './FbxPanelRadioButton.md';
import DynamicValuesStoryComponent from './stories/FbxPanelRadioButton.dynamic-values.story.vue';
import NoIconsStoryComponent from './stories/FbxPanelRadioButton.no-icons.story.vue';
import WithValidationStoryComponent from './stories/FbxPanelRadioButton.with-validation.story.vue';

const stories = storiesOf('Components/PanelRadioButton', module);

stories.add('description', doc(summary));
stories.add('dynamic text and icons', () => DynamicValuesStoryComponent);
stories.add('without icons', () => NoIconsStoryComponent);
stories.add('with validation', () => WithValidationStoryComponent);

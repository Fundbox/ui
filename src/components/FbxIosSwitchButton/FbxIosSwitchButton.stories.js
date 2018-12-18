import { storiesOf } from '@storybook/vue'

import summary from './FbxIosSwitchButton.md'
import { doc }  from 'storybook-readme'
import FbxIosWithDebounceDisabled from './stories/FbxIosSwitchButton.debounce-disabled.story'

const stories = storiesOf('Components/IosSwitchButton', module)

stories.add('description', doc(summary))
stories.add('debounce disabled', () => FbxIosWithDebounceDisabled)

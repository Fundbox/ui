import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import DropDownMenu from './stories/DropDownMenu.story.vue'
import summary from './FbxDropdown.md'

const stories = storiesOf('Components/Dropdown', module)

stories.add('description', doc(summary))
stories.add('drop down menu', () => DropDownMenu)

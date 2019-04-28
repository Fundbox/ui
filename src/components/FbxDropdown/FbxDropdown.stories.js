import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import DropDownMenu from './stories/DropDownMenu.story.vue'
import summary from './FbxDropdown.md'
import DropDownMenuWithText from './stories/DropDownMenuWithText.story'

const stories = storiesOf('Components/Dropdown', module)

stories.add('description', doc(summary))
stories.add('drop down menu', () => DropDownMenu)
stories.add('drop down menu with text', () => DropDownMenuWithText)

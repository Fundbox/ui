import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import './stories/FbxModalWrapper.stories.scss'
import summary from './FbxModalWrapper.md'
import DemoModalWrapperStoryComponent from './stories/FbxModalWrapper.demo.story'

const stories = storiesOf('Components/ModalWrapper', module)

stories.add('description', doc(summary))
stories.add('demo', () => DemoModalWrapperStoryComponent)


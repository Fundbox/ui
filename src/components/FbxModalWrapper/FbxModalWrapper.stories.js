import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import './stories/FbxModalWrapper.stories.scss'
import summary from './FbxModalWrapper.md'
import BasicModalStoryComponent from './stories/FbxModalWrapper.basic.story'
import NoTitleModalStoryComponent from './stories/FbxModalWrapper.no-title.story'
import ScrollableModalStoryComponent from './stories/FbxModalWrapper.scrollable.story'
import LoadingModalStoryComponent from './stories/FbxModalWrapper.loading.story'
import ModalWithOnCloseComponent from './stories/FbxModalWrapper.on-close.story'

const stories = storiesOf('Components/ModalWrapper', module)

stories.add('description', doc(summary))
stories.add('loading', () => LoadingModalStoryComponent)
stories.add('basic', () => BasicModalStoryComponent)
stories.add('no title', () => NoTitleModalStoryComponent)
stories.add('scrollable', () => ScrollableModalStoryComponent)
stories.add('with on-close handler', () => ModalWithOnCloseComponent)


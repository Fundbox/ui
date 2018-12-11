import { storiesOf } from '@storybook/vue'
import { doc } from 'storybook-readme'

import './stories/FbxModalWrapper.stories.scss'
import summary from './FbxModalWrapper.md'
import BasicModalWrapperStoryComponent from './stories/FbxModalWrapper.basic.story'
import NoTitleModalWrapperStoryComponent from './stories/FbxModalWrapper.no-title.story'
import ScrollableModalWrapperStoryComponent from './stories/FbxModalWrapper.scrollable.story'
import LoadingModalWrapperStoryComponent from './stories/FbxModalWrapper.loading.story'

const stories = storiesOf('Components/ModalWrapper', module)

stories.add('description', doc(summary))
stories.add('loading', () => LoadingModalWrapperStoryComponent)
stories.add('basic', () => BasicModalWrapperStoryComponent)
stories.add('no title', () => NoTitleModalWrapperStoryComponent)
stories.add('scrollable', () => ScrollableModalWrapperStoryComponent)


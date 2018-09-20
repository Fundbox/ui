import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { array } from '@storybook/addon-knobs';

import FbxTabs from './FbxTabs.vue';
import summary from './FbxTabs.md';
const stories = storiesOf('FbxTabs', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { FbxTabs },
  data() {
    return {
      tabs: array('Tabs', ['Settings', 'Profile']),
    }
  },
  template: `<fbx-tabs :tabs="tabs" @tabSelected="onTabSelect"></fbx-tabs>`,
  methods: { onTabSelect: action('onTabSelect') },
})));

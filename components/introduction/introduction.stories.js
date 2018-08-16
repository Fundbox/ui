import { storiesOf } from '@storybook/vue';
import { linkTo } from '@storybook/addon-links';

import Introduction from './index';

storiesOf('Introduction', module).add('to Storybook', () => ({
  components: { Introduction },
  template: '<introduction :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

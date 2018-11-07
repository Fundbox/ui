---
to: components/Fbx<%= name %>/Fbx<%= name %>.stories.js
---
import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

import Fbx<%= name %> from './Fbx<%= name %>.vue';
import summary from './Fbx<%= name %>.md';

const stories = storiesOf('Components/<%= name %>', module);

stories.add('default', withInfo({ summary })(() => ({
  components: { Fbx<%= name %> },
  template: `<fbx-<%= h.inflection.transform(name, [ 'underscore', 'dasherize' ])%>></fbx-<%= h.inflection.transform(name, [ 'underscore', 'dasherize' ])%>>`
})));

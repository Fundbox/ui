---
to: directives/Fbx<%= name %>/Fbx<%= name %>.stories.js
---
import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';

import Fbx<%= name %> from './Fbx<%= name %>.js';
import summary from './Fbx<%= name %>.md';

const stories = storiesOf('Directives/<%= name %>', module);

stories.add('default', withInfo({ summary })(() => ({
  directives: { Fbx<%= name %> },
  template: `<div v-fbx-<%= h.inflection.transform(name, [ 'underscore', 'dasherize' ])%>></div>`
})));

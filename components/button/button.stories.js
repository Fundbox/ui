import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withInfo } from 'storybook-addon-vue-info';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import FbxButton from './index';
import summary from './button.md';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('with text', withInfo({ summary })(() => ({
  components: { FbxButton },
  template: `<fbx-button
                type="submit"
                name="foo"
                @click="click"
                :pending="${boolean('Pending', false)}"
                ${boolean('Disabled', false) ? 'disabled' : ''}
              >${text('Text', 'Hello button')}</fbx-button>`,
  methods: { click: action('clicked') },
})));

stories.add('with some emoji', () => ({
  components: { FbxButton },
  template: '<fbx-button @click="click">😀 😎 👍 💯</fbx-button>',
  methods: { click: action('clicked') },
}));

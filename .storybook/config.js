import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Fundbox UI Components Library',
  url: 'https://github.com/Fundbox/ui',
  addonPanelInRight: true,
});

configure(() => require('../components/main.stories'), module);

import { configure } from '@storybook/vue'
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Funbox Components Library',
  url: 'https://github.com/Fundbox/frontend',
  addonPanelInRight: true,
});

configure(() => require('../components/main.stories'), module);

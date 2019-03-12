import Vue from "vue";
import VeeValidate from "vee-validate";
import { configure, addDecorator, addParameters } from "@storybook/vue"
import { create } from '@storybook/theming';
import FbxStylesAddon from './../.storybook/addons/fundbox-styles-addon';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(FbxStylesAddon)
addDecorator(withKnobs)

const dictionary = {
  en: {
    messages: {
      email() {
        return "This value should be a valid email.";
      }
    }
  }
};
VeeValidate.Validator.dictionary.merge(dictionary);

Vue.use(VeeValidate, {
  events: "change"
});

addParameters({
  options: {
    theme: create({
      base: 'dark',
      brandTitle: 'Fundbox UI Library',
      brandUrl: 'https://github.com/Fundbox/ui'
    }),
    isFullscreen: false,
    panelPosition: 'right',
  }
})
configure(() => require("../src/main.stories"), module);

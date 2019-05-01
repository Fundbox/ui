import Vue from "vue";
import VeeValidate from "vee-validate";
import { configure, addDecorator } from "@storybook/vue"
import { setOptions } from "@storybook/addon-options";
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

Vue.prototype.$sanitize = text => text

setOptions({
  name: "Fundbox UI Library",
  url: "https://github.com/Fundbox/ui",
  addonPanelInRight: true,
});

configure(() => require("../src/main.stories"), module);

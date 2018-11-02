import isObject from "lodash/isObject";
import isEmpty from "lodash/isEmpty";
import Vue from "vue";
import VeeValidate from "vee-validate";
import { configure, addDecorator } from "@storybook/vue"
import { setOptions } from "@storybook/addon-options";
import FbxStylesAddon from './../.storybook/addons/fundbox-styles-addon';
import { US_STATES } from "../consts/us-states.const";
import { withKnobs } from '@storybook/addon-knobs';
import "./../index";

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

VeeValidate.Validator.extend("addressRequired", {
  getMessage: () => "Please select one of the addresses listed",
  validate(__value, [addressData]) {
    return isObject(addressData) && !isEmpty(addressData);
  },
});

VeeValidate.Validator.extend("addressInsideUSA", {
  getMessage: () => "State must be within the U.S. region",
  validate(__value, [addressData]) {
    return !!(addressData.state && US_STATES[addressData.state]);
  },
});

VeeValidate.Validator.extend("fullAddress", {
  getMessage: () => "Address must contain street and number",
  validate(__value, [addressData]) {
    return !!(addressData.streetNumber && addressData.street);
  },
});

VeeValidate.Validator.dictionary.merge(dictionary);

Vue.use(VeeValidate, {
  events: "change"
});

setOptions({
  name: "Fundbox UI Components Library",
  url: "https://github.com/Fundbox/ui",
  addonPanelInRight: true,
});

configure(() => require("../main.stories"), module);

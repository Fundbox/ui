import VeeValidate from 'vee-validate';
import Vue from 'vue';

import {
  passwordValidation,
  addressInsideUSAValidation,
  addressRequiredValidation,
  fullAddressValidation,
  phoneNumberValidation,
  fullNameValidation
} from './validations';

VeeValidate.Validator.extend('password', {
  getMessage: () => 'Password must contain letters and at least 1 number or symbol',
  validate: passwordValidation,
});

VeeValidate.Validator.extend('phoneNumber', {
  getMessage: () => 'Please enter a valid phone number',
  validate: phoneNumberValidation,
});

VeeValidate.Validator.extend('addressRequired', {
  getMessage: () => 'Please select one of the addresses listed',
  validate: addressRequiredValidation,
});

VeeValidate.Validator.extend('addressInsideUSA', {
  getMessage: () => 'State must be within the U.S. region',
  validate: addressInsideUSAValidation
});

VeeValidate.Validator.extend('fullAddress', {
  getMessage: () => 'Address must contain street and number',
  validate: fullAddressValidation
});

VeeValidate.Validator.extend('fullName', {
  getMessage: () => 'Please enter full name',
  validate: fullNameValidation
});

Vue.use(VeeValidate);

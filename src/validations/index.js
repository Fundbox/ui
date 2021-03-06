import VeeValidate from 'vee-validate'
import Vue from 'vue'
import { currencyFormatter } from '../utils/currency-formatter'

import {
  passwordValidation,
  addressInsideUSAValidation,
  addressRequiredValidation,
  fullAddressValidation,
  phoneNumberValidation,
  fullNameValidation,
  maxValueValidation,
  minValueValidation,
} from './validations'

VeeValidate.Validator.extend('password', {
  getMessage: () => 'Password must contain letters and at least 1 number or symbol',
  validate: passwordValidation,
})

VeeValidate.Validator.extend('phoneNumber', {
  getMessage: () => 'Please enter a valid phone number',
  validate: phoneNumberValidation,
})

VeeValidate.Validator.extend('addressRequired', {
  getMessage: () => 'Please select one of the addresses listed',
  validate: addressRequiredValidation,
})

VeeValidate.Validator.extend('addressInsideUSA', {
  getMessage: () => 'State must be within the U.S. region',
  validate: addressInsideUSAValidation
})

VeeValidate.Validator.extend('fullAddress', {
  getMessage: () => 'Address must contain street and number',
  validate: fullAddressValidation
})

VeeValidate.Validator.extend('fullName', {
  getMessage: () => 'Please enter full name',
  validate: fullNameValidation
})

VeeValidate.Validator.extend('max_value', {
  getMessage(field, [max]) {
    return `The ${field} field must be ${currencyFormatter(max)} or less.`
  },
  validate: maxValueValidation,
})

VeeValidate.Validator.extend('min_value', {
  getMessage(field, [max]) {
    return `The ${field} field must be ${currencyFormatter(max)} or more.`
  },
  validate: minValueValidation,
})

Vue.use(VeeValidate)

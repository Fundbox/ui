import isObject from 'lodash/isObject'
import isEmpty from 'lodash/isEmpty'
import { US_STATES } from '../consts/us-states.const'

export function passwordValidation(value) {
  const hasNumbersOrSymbols = /[^a-zA-Z]/g
  const hasLetters = /[a-zA-Z]/g
  return hasLetters.test(value) && hasNumbersOrSymbols.test(value)
}

export function phoneNumberValidation(value) {
  return /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(value)
}

export function addressRequiredValidation(__value, [addressData]) {
  return isObject(addressData) && !isEmpty(addressData)
}

export function addressInsideUSAValidation(__value, [addressData]) {
  return !!(addressData.state && US_STATES[addressData.state])
}

export function fullAddressValidation(__value, [addressData]) {
  return !!(addressData.streetNumber && addressData.street)
}

export function fullNameValidation(value) {
  return /[a-zA-Z0-9]*/.test(value) && value.indexOf(' ') > 0
}

// Override the built in max_value validator to handle numbers with commas (currency masks)
// https://github.com/baianat/vee-validate/blob/master/src/rules/max_value.js
export function maxValueValidation(value, [max]) {
  if (value === null || value === undefined || value === '') {
    return false
  }

  value = value.replace(/,/g, '')

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(val => maxValueValidation(val, [max]))
  }

  return Number(value) <= max
}

// Override the built in min_value validator to handle numbers with commas (currency masks)
// https://github.com/baianat/vee-validate/blob/master/src/rules/min_value.js
export function minValueValidation(value, [min]) {
  if (value === null || value === undefined || value === '') {
    return false
  }

  value = value.replace(/,/g, '')

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(val => minValueValidation(val, [min]))
  }

  return Number(value) >= min
}

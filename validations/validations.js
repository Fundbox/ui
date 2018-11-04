import isObject from "lodash/isObject";
import isEmpty from "lodash/isEmpty";
import { US_STATES } from "../consts/us-states.const";

export function passwordValidation(value) {
  const hasNumbersOrSymbols = /[^a-zA-Z]/g;
  const hasLetters = /[a-zA-Z]/g;
  return hasLetters.test(value) && hasNumbersOrSymbols.test(value);
}

export function phoneNumberValidation(value) {
  return /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(value);
}

export function addressRequiredValidation(__value, [addressData]) {
  return isObject(addressData) && !isEmpty(addressData);
}

export function addressInsideUSAValidation(__value, [addressData]) {
  return !!(addressData.state && US_STATES[addressData.state]);
}

export function fullAddressValidation(__value, [addressData]) {
  return !!(addressData.streetNumber && addressData.street);
}

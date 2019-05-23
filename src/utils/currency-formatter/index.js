/*
  Note: this is copy/pasted from currency-formatter.js in `frontend/fbx_common/src/utils/currency-formatter.js`
  and both should be consolidated and moved to our utils repo once it's created

  Convert a string to formatted currency.
  Example: "abc12000.33.33" => "12,000.33"
 */
export function currencyFormatter(value) {
  value = value.toString()
  // Clear left side zeros
  while (value.charAt(0) === '0') {
    value = value.substr(1)
  }
  // Remove any character that is not a digit or decimal
  value = value.replace(/[^\d.]/g, '')
  // Remove everything after 2 decimal places
  const point = value.indexOf('.')
  if (point >= 0) {
    value = value.slice(0, point + 3)
  }
  const decimalSplit = value.split('.')
  let intPart = decimalSplit[0]
  let decPart = decimalSplit[1]
  // Add thousands separator (commas)
  if (intPart.length > 3) {
    let intDiv = Math.floor(intPart.length / 3)
    while (intDiv > 0) {
      let lastComma = intPart.indexOf(',')
      if (lastComma < 0) {
        lastComma = intPart.length
      }
      if (lastComma - 3 > 0) {
        intPart = `${intPart.slice(0, lastComma - 3)},${intPart.slice(lastComma - 3)}`
      }
      intDiv--
    }
  }
  if (decPart === undefined) {
    decPart = ''
  } else {
    decPart = `.${decPart}`
  }

  if (intPart === '') {
    // Add a zero if there's only a decimal
    intPart = '0'
  }
  return intPart + decPart
}

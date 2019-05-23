export function asyncTimeout(time = 0) {
  return new Promise(resolve => setTimeout(() => resolve(), time))
}

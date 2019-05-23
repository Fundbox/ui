export class BaseError extends Error {
  constructor(...params) {
    super(...params)
    const constructor = Object.getPrototypeOf(this).constructor
    this.name = constructor.name

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, constructor)
    }
  }
}

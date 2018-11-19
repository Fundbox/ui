export default {
  inserted(el, { value: active }) {
    if (active !== false) el.focus()
  }
}

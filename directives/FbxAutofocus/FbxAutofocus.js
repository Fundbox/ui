import Vue from "vue";

export default Vue.directive("FbxAutofocus", {
  inserted(el, { value: active }) {
    if (active !== false) el.focus();
  }
});

import Vue from "vue";

export default Vue.directive("FbxAutofocus", {
  inserted: function (el, { value: active }) {
    if (active === false) {
      return;
    }
    el.focus();
  }
});

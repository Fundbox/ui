import Vue from "vue";
import FbxStyles from "./FbxStyles";

Vue.component('fbx-styles', FbxStyles)

export default function() {
  return {
    template: `<fbx-styles><story/></fbx-styles>`
  };
}

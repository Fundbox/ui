import Vue from "vue";
import FbxTextField from "./FbxTextField.vue";
import { VueMaskDirective } from "v-mask"

Vue.component(FbxTextField.name, FbxTextField);
Vue.directive("mask", VueMaskDirective);

export default FbxTextField;

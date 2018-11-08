import "../../validations";
import Vue from "vue";
import { VueMaskDirective } from "v-mask"
import FbxTextField from "./FbxTextField.vue";

Vue.component(FbxTextField.name, FbxTextField);
Vue.directive("mask", VueMaskDirective);

export default FbxTextField;

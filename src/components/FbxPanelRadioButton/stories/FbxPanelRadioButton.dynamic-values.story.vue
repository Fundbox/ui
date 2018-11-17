<template>
<div class="fbx-panel-group-wrapper">
  <div>Selected: {{ selectedDataSource }}</div>

  <div class="fbx-panel-radio-button-group">
    <fbx-panel-radio-button
      :iconPath="icon"
      v-model="selectedDataSource"
      :value="headerText"
      @change="onCoolChange"
    >
      <div slot="header">{{ headerText }}</div>
      <div slot="body">{{ bodyText }}</div>
    </fbx-panel-radio-button>

    <fbx-panel-radio-button
      :iconPath="icon2"
      v-model="selectedDataSource"
      value="OPTION TWO"
      @change="onCoolChange"
    >
      <div slot="header">Option 2</div>
      <div slot="body">
        Dynamic HTML content <strong>is very handy</strong>
        <br />
        <pre>npm i -g npm</pre>
      </div>
    </fbx-panel-radio-button>

    <fbx-panel-radio-button
      :iconPath="icon3"
      v-model="selectedDataSource"
      value="option the third"
      @change="onCoolChange"
    >
      <div slot="header">Option 3</div>
      <div slot="body">This option is the best</div>
    </fbx-panel-radio-button>
  </div>
</div>
</template>


<script>
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import icon from '../../../assets/logo.png';
import icon2 from '../../../assets/icon_check_active.svg';
import icon3 from '../../../assets/icon_check_disabled.svg';
import FbxPanelRadioButton from '../FbxPanelRadioButton.vue';

export default {
  components: { FbxPanelRadioButton },
  data() {
    return {
      selectedDataSource: null,
      icon,
      icon2,
      icon3,
      headerText: text('Header Text', 'Caramels toffee  gummi bears'),
      bodyText: text('Text', 'Halvah chupa chups caramels sugar sugar plum ice cream wafer sugar pudding fruitcake snaps donut. lemon drops topping marshmallow sesame gummi bears sugar. biscuit dessert powder croissant jujubes powder chocolate tootsie topping.')
    };
  },
  methods: {
    onCoolChange: action('@change')
  },
};
</script>

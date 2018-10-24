import { storiesOf } from '@storybook/vue';
import { withInfo } from 'storybook-addon-vue-info';
import FbxTooltip from '../FbxTooltip';
import summary from './FbxTooltip.md';

const stories = storiesOf('Tooltip', module);
const storyWithInfo = withInfo({ summary });

const defaultStory = () => ({
  components: { FbxTooltip },
  watch: {},
  template: `
    <div>
      <span id="tooltip">Hover me to see a tooltip :)</span>
      <fbx-tooltip target="tooltip">I'm a tooltip</fbx-tooltip>
    </div>
  `,
});

const directionStory = () => ({
  components: { FbxTooltip },
  data() {
    return {}
  },
  watch: {},
  template: `
    <div>
      <span id="tooltipTop">Hover me to see a top tooltip :)</span><br />
      <span id="tooltipBottom">Hover me to see a bottom tooltip :)</span><br />
      <span id="tooltipLeft" style="float: right;">Hover me to see a left tooltip :)</span><br />
      <span id="tooltipRight">Hover me to see a right tooltip :)</span><br />
      <fbx-tooltip target="tooltipTop" placement="top">I'm a tooltip</fbx-tooltip>
      <fbx-tooltip target="tooltipBottom" placement="bottom">I'm a tooltip</fbx-tooltip>
      <fbx-tooltip target="tooltipLeft" placement="left" boundary="viewport">I'm a tooltip</fbx-tooltip>
      <fbx-tooltip target="tooltipRight" placement="right" boundary="viewport">I'm a tooltip</fbx-tooltip>
    </div>
  `,
});

const triggersStory = () => ({
  components: { FbxTooltip },
  data() {
    return {}
  },
  watch: {},
  template: `
    <div>
      <span id="hover">Hover me to see a top tooltip :)</span><br />
      <span id="click">click me to see a top tooltip :)</span><br />
      <fbx-tooltip target="hover" triggers="hover">I'm a tooltip</fbx-tooltip>
      <fbx-tooltip target="click" triggers="click">I'm a tooltip</fbx-tooltip>
    </div>
  `,
});

const customHTMLStory = () => ({
  components: { FbxTooltip },
  data() {
    return {}
  },
  watch: {},
  template: `
    <div>
      <span id="custom">Hover me to see a top tooltip :)</span><br />
      <fbx-tooltip target="custom">
        <h1>Hi</h1>
        <p>I'm a complex html template</p>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </fbx-tooltip> 
    </div>
  `,
});

stories.add('default', storyWithInfo(defaultStory));
stories.add('placements', storyWithInfo(directionStory));
stories.add('triggers', storyWithInfo(triggersStory));
stories.add('custom content', storyWithInfo(customHTMLStory));

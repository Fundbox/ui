import { storiesOf } from '@storybook/vue'
import './Icomoon.scss'

const stories = storiesOf('Icons/Icomoon', module)

const defaultStory = () => ({
  template: `
    <div class="icon-story-wrapper">
      <div class="icon-description-wrapper">
        <div class="fbx-icon-32_round_X"></div>
        <div class="icon-description">fbx-icon-32_round_X</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-32_round_question"></div>
        <div class="icon-description">fbx-icon-32_round_question</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-32_badge_check_mark"></div>
        <div class="icon-description">fbx-icon-32_badge_check_mark</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_arrow-down"></div>
        <div class="icon-description">fbx-icon-24_arrow-down</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_arrow-left"></div>
        <div class="icon-description">fbx-icon-24_arrow-left</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_arrow-right"></div>
        <div class="icon-description">fbx-icon-24_arrow-right</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_check"></div>
        <div class="icon-description">fbx-icon-24_check</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_checkmark-in-circle"></div>
        <div class="icon-description">fbx-icon-24_checkmark-in-circle</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_close_hover"></div>
        <div class="icon-description">fbx-icon-24_close_hover</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_close"></div>
        <div class="icon-description">fbx-icon-24_close</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_lock"></div>
        <div class="icon-description">fbx-icon-24_lock</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_warning-triangle"></div>
        <div class="icon-description">fbx-icon-24_warning-triangle</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_x-alerts"></div>
        <div class="icon-description">fbx-icon-24_x-alerts</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-green-checkmark-in-circle"></div>
        <div class="icon-description">fbx-icon-green-checkmark-in-circle</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-add"></div>
        <div class="icon-description">fbx-icon-add</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-warning-triangle2"></div>
        <div class="icon-description">fbx-icon-warning-triangle2</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-lock"></div>
        <div class="icon-description">fbx-icon-lock</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-x-alerts"></div>
        <div class="icon-description">fbx-icon-x-alerts</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-close"></div>
        <div class="icon-description">fbx-icon-close</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-arrow-down"></div>
        <div class="icon-description">fbx-icon-arrow-down</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-arrow-left"></div>
        <div class="icon-description">fbx-icon-arrow-left</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-arrow-right"></div>
        <div class="icon-description">fbx-icon-arrow-right</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-check"></div>
        <div class="icon-description">fbx-icon-check</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-printer"></div>
        <div class="icon-description">fbx-icon-printer</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-warning-triangle"></div>
        <div class="icon-description">fbx-icon-warning-triangle</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-x"></div>
        <div class="icon-description">fbx-icon-x</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_thumbs-down"></div>
        <div class="icon-description">fbx-icon-24_thumbs-down</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_thumbs-up"></div>
        <div class="icon-description">fbx-icon-24_thumbs-up</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_lightbulb-on"></div>
        <div class="icon-description">fbx-icon-24_lightbulb-on</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-24_lightbulb-off"></div>
        <div class="icon-description">fbx-icon-24_lightbulb-off</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-16_document"></div>
        <div class="icon-description">fbx-icon-16_document</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-16_pencil"></div>
        <div class="icon-description">fbx-icon-16_pencil</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-16_plus"></div>
        <div class="icon-description">fbx-icon-16_plus</div>
      </div>
      <div class="icon-description-wrapper">
        <div class="fbx-icon-16_switch"></div>
        <div class="icon-description">fbx-icon-16_switch</div>
      </div>
    </div>
  `,
})

stories.add('default', defaultStory)

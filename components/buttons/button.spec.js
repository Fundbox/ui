import { mount } from 'vue-test-utils';
import Button from './index';

describe('button.vue', () => {
  it('should render correct contents', () => {
    const btnText = 'Hello button';
    const component = mount(Button, {
      slots: {
        default: btnText,
      },
    });
    expect(component.vm.$el.textContent.trim())
      .toEqual(btnText);
  });
});

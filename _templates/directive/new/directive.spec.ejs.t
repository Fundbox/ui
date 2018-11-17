---
to: src/directives/Fbx<%= name %>/Fbx<%= name %>.spec.js
---
import { shallowMount } from '@vue/test-utils';
import Fbx<%= name %> from './Fbx<%= name %>';

describe('Directives/Fbx<%= name %>', () => {
  it('works', () => {
    const wrapper = shallowMount({
      directives: { Fbx<%= name %> },
      template: '<div v-fbx-<%= h.inflection.transform(name, [ "underscore", "dasherize" ])%>></div>',
    });

    expect(wrapper).toBeTruthy;
  });
});

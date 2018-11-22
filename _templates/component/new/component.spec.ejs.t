---
to: src/components/Fbx<%= name %>/Fbx<%= name %>.spec.js
---
import { shallowMount } from '@vue/test-utils'
import Fbx<%= name %> from './Fbx<%= name %>.vue'

describe('Components/Fbx<%= name %>', () => {
  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(Fbx<%= name %>, {
        // mounting options https://vue-test-utils.vuejs.org/api/options.html
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

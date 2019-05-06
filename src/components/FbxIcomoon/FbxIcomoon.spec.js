import { shallowMount } from '@vue/test-utils'
import FbxIcomoon from './FbxIcomoon.vue'

describe('Components/FbxIcomoon', () => {
  describe('logic', () => {
    it('test for required param', () => {
      let spy = jest.spyOn(console, 'error').mockImplementation(() => null)
      shallowMount(FbxIcomoon)
      expect(spy).toHaveBeenCalledWith(expect.stringContaining(`[Vue warn]: Missing required prop: "name"`))
      spy.mockRestore()
    })
  })

  describe('snapshots', () => {
    it('renders the default correctly', () => {
      const wrapper = shallowMount(FbxIcomoon, {
        propsData: {
          name: 'lock',
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders background color and round', () => {
      const wrapper = shallowMount(FbxIcomoon, {
        propsData: {
          name: 'lock',
          background: '#858585',
          color: 'white',
          round: true,
        }
      })
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})

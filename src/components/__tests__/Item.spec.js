import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders "item"', () => {
    const wrapper = shallowMount(Item)
    // eslint-disable-next-line
                                 debugger;
    expect(wrapper.text()).toContain('item')
  })
})

import BgContainer from '@/components/BgContainer'
import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
describe('BgContainer', () => {
  it('Добавление размытия', async () => {
    const wrapper = mount(BgContainer)
    const content = wrapper.find('#container-content')
    await content.trigger('mouseenter')
    expect(wrapper.html()).toMatch('more-blur')
  })
  it('Уменьшение  размытия', async () => {
    const wrapper = mount(BgContainer)
    const content = wrapper.find('#container-content')
    await content.trigger('mouseleave')
    expect(wrapper.html()).not.toMatch('more-blur')
  })
})

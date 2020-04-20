import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/packages/Button/Button.vue'
import Icon from '@/packages/Icon/Icon.vue'

// describe 划分作用域
describe('Button.vue', () => {
  it('测试button组件的slot是否正常', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: '主要按钮'
      }
    })
    // wrapper.text()
    expect(wrapper.text()).to.equal('主要按钮')
  })
  it('测试icon属性传入button是否正常', () => {
    const wrapper = shallowMount(Button, { 
      stubs: {
        'ed-icon': Icon
      },
      propsData: {
        icon: 'chenggong'
      },
      slots: {
        default: 'test'
      }
    })
    expect(wrapper.find("use").attributes('href')).to.eq('#icon-chenggong')
  })
  // it('测试按钮传入的position是否正常', () => {
  // })
})

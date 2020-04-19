// import Button from './Button/Button.vue'
// import ButtonGroup from './ButtonGroup/ButtonGroup.vue'
// import Icon from './Icon/Icon.vue'

const install = (Vue) => {
  // 常规写法
  // Vue.component(Button.name, Button)
  // Vue.component(ButtonGroup.name, ButtonGroup)
  // Vue.component(Icon.name, Icon)

  // 优雅写法
  // require.context 是webpack api提供的

  const requireComponent = require.context('.', true, /\.vue/)
  // console.log(requireComponent.keys())
  const keys = requireComponent.keys()
  Array.from(keys).forEach(filePath => {
    const config = requireComponent(filePath)
    Vue.component(config.default.name, config.default)
  })
}

// script vue是用过script引入的，存在于window下
// 通过import引入的是放在模块内的 不需要这么做
if (typeof window.Vue !== "undefined") {
  install(Vue)
}

export default {
  install
}
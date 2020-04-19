// 这个文件相当于vue中的main.js
import Vue from 'vue'
// 借助element-ui的部分样式 美化文档 不用也是可以的
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'

import Button from '../../../src/packages/Button/Button.vue'
import Icon from '../../../src/packages/Icon/Icon.vue'

Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)

console.log('success')

Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

export default ({
  Vue
}) => {
  Vue.use(Element)
}
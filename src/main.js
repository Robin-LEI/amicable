import Vue from 'vue'
import App from './App.vue'
import './styles/icon.js'
import edUI from './packages/index.js'
// import 'ede-ui/dist/ed-ui.css'
// import edUI from 'ede-ui'
Vue.use(edUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

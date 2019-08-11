import Vue from 'vue/dist/vue.esm.js'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(BootstrapVue)

import './plugins/table.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

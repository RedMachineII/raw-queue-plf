import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import './plugins/bootstrap-vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faUserSecret)
library.add(fas, fab)

import VueApexCharts from 'vue-apexcharts'
import VueConfirmDialog from 'vue-confirm-dialog'
import VueSpeedometer from "vue-speedometer"

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(VueSpeedometer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

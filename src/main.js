import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import ScrollSync from 'vue-scroll-sync'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  ScrollSync,
  render: h => h(App)
}).$mount('#app')

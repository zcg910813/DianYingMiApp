import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import flexible from 'lib-flexible'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
import ElementUI from 'element-ui'
import ElementThemes from 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

// import './mock/mock'
if(process.env.NODE_ENV === 'development') {
  require('./mock/mock.js');
}

Vue.config.productionTip = false
// 移动端300ms延迟解决方案
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

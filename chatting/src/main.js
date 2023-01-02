// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')


// 오류 나면 이하 설치할것.
// npm install --save vue-material vue-socket.io

import Vue from 'vue' // 맨 하부의 선언에 관여
import App from './App_old.vue'
import VueMaterial from 'vue-material' // 데코레이션
import 'vue-material/dist/vue-material.css' 
import 'vue-material/dist/theme/black-green-light.css'
import Directives from '../plugin/directives' // 스크롤 다운 기능 구현

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

Vue.prototype.$socket = socket;

Vue.use(VueMaterial)
Vue.use(Directives)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
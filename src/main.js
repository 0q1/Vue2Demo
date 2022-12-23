import Vue from 'vue'
import App from './App.vue'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';

import Count from '@/components/Count'

Vue.component("MyCount",Count)
Vue.config.productionTip = false
Vue.use(ElementUI).use(Vant)
new Vue({
  el:'#app',
  router,
  render: h => h(App)
})

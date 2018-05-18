import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI);
Vue.use(VueRouter)
//关闭生产模式下给出的提示
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
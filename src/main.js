import Vue from 'vue'
import App from './App.vue'
// import common from './js/common'
import router from './router';
import store from './store';

// Vue.prototype.$http = common;

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')   

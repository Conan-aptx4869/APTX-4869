import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.use(VueRouter);

var router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller},
    {
      path: '/',
      redirect: '/goods'
    }
  ]
});
new Vue({
  components: {App},
  router: router
}).$mount('#app');

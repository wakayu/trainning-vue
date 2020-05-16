import Vue from 'vue'
import Router from 'vue-router'
import Maincontent from './components/Maincontent.vue'
import Paypay from './components/Paypay.vue'
import Linepay from './components/Linepay.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //URLに#がいらない
  routes: [
    {
        path: '/',
        name: 'home',
        component: Maincontent
    },
    {
        path: '/paypay',
        name: 'paypay',
        component: Paypay
    },
    {
      path: '/line',
      name: 'line',
      component: Linepay
    }
  ]
})
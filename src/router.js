import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Paypay from './components/Paypay.vue'
import Linepay from './components/Linepay.vue'
import Merpay from './components/Merpay.vue'
import Docomo from './components/Docomo.vue'
import Aupay from './components/Aupay.vue'
import Kyash from './components/Kyash.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', //URLに#がいらない
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },
    {
      path: '/merpay',
      name: 'merpay',
      component: Merpay
    },
    {
      path: '/docomo',
      name: 'docomo',
      component: Docomo
    },
    {
      path: '/au',
      name: 'au',
      component: Aupay
    },
    {
      path: '/kyash',
      name: 'kyash',
      component: Kyash
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Paypay from './components/Paypay.vue'
import Linepay from './components/Linepay.vue'
import Origamipay from './components/Origamipay.vue'

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
      path: '/origami',
      name: 'origami',
      component: Origamipay
    }
  ]
})
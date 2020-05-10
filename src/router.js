import Vue from 'vue'
import Router from 'vue-router'
import Maincontent from './components/Maincontent.vue'
import Maincontent2 from './components/Maincontent2.vue'

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
        path: '/about',
        name: 'about',
        component: Maincontent2
    }
  ]
})
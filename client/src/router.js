import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Kanvan from './views/Kanvan.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/kanvan',
      name: 'kanvan',
      component: Kanvan,
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Exchange from '@/components/Exchange'

Vue.use(Router)

import VueMaterial from 'vue-material'
Vue.use(VueMaterial)
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@/css/global.css'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Exchange',
      name: 'Exchange',
      component: Exchange
    }
  ]
})

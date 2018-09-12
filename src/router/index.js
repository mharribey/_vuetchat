import Vue from 'vue'
import Router from 'vue-router'

import Login from '../Login'
import Chat from '../Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
  ]
})

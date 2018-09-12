import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import Chat from 'pages/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
  ]
})

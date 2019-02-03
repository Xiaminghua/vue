import Vue from 'vue'
import Router from 'vue-router'
import UserElem from '@/components/common/useElem.vue'
import Login from '@/components/login/login.vue'
import Home from '@/components/page/home.vue'
import User from '@/components/page/users/users.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'UserElem',
      path: '/ele',
      component: UserElem
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      children: [
        { path: '/users', component: User} // /users
      ]
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Login from '@/components/login/Login'
import User from '@/components/user/User'
import Question from '@/components/question/Question'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/user',
      name:'User',
      component: User
    },
    {
      path: '/QA',
      name: 'Question',
      component: Question
    }
  ]
})

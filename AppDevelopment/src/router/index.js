import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import User from '@/components/user/User'
import Question from '@/components/question/Question'
import Message from '@/components/message/Message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})

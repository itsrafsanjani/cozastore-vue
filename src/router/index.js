import Vue from 'vue'
import Router from 'vue-router'
import HomeContent from '@/components/home/Home'
import ContactContent from '@/components/contact/Contact'
import CategoryContent from '@/components/category/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeContent',
      component: HomeContent
    },
    {
      path: '/contact',
      name: 'ContactContent',
      component: ContactContent
    },
    {
      path: '/category/:id',
      name: 'CategoryContent',
      component: CategoryContent
    }
  ],
  mode: 'history'
})

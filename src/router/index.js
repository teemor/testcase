import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
const index = () => import('@/components/Business/DomainModule/HomePage')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

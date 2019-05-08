import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/platform',
      name: 'platform',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Platform.vue'),
      children: [
      
      ]
    },
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Index.vue')
    },
    {
      path: '/welcome',
      name: '欢迎（个人首页）',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Welcome.vue'),
      children: [
        { path: ':name', component: () => import(/* webpackChunkName: "common" */ './views/common/Welcome.vue') }
      ]
    },
    {
      path: '*',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "common" */ './views/common/404.vue')
    }
  ]
})

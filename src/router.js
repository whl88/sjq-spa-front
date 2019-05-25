import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "common" */ './views/login/Login.vue')
    },
    {
      path: '/v',
      name: 'visualization',
      component: () => import(/* webpackChunkName: "common" */ './views/visualization/Index.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Platform.vue'),
      children: [
        {
          path: '',
          name: 'Welcome',
          component: () => import(/* webpackChunkName: "common" */ './views/common/Welcome.vue')
        },
        {
          path: '*',
          name: 'p404',
          component: () => import(/* webpackChunkName: "common" */ './views/common/P404.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'p404',
      component: () => import(/* webpackChunkName: "common" */ './views/common/P404.vue')
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Index.vue')
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import(/* webpackChunkName: "common" */ './views/common/Platform.vue'),
      children: [
        {
          path:'welcome',
          component: () => import(/* webpackChunkName: "common" */ './views/common/Welcome.vue'),
        },
        {
          path: '*',
          name: '404',
          component: () => import(/* webpackChunkName: "common" */ './views/common/404.vue')
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "common" */ './views/common/404.vue')
    }
  ]
})

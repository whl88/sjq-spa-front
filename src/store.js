import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        config: {
            baseUrl: 'http://localhost:8080'
        },
        menus: [
            {
                url: '/home',
                text: '个人首页'
            },
            {
                url: '/welcome',
                text: '网站统计'
            },
            {
                url: '/about',
                text: '关于'
            }
        ]
    },
    mutations: {},
    actions: {}
})

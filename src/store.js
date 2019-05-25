import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:null,
        menus: null
    },
    mutations: {
        setUser:function (state,user) {
            state.user = user;
        },
        setMenus:function (state,menus) {
            state.menus = menus;
        },
    },
    actions: {
        refreshUser:function (context) {
            if(!context.state.user){
                axios.get('/api/main/user')
                    .then(r => {
                        context.commit('setUser',r.data);
                    })
            }
        },
        refreshMenus:function (context) {
            if(!context.state.menus){
                axios.get('/api/main/menus')
                    .then(r => {
                        context.commit('setMenus',r.data);
                    })
            }
        },
    }
})

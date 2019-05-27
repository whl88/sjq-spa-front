<template>
    <div class="platform">
        <div class="head">
            <div class="title">
                <img class="logo" src="../../assets/logo.png"/>
                <span class="text">南通市公安局执法办案基地</span>
            </div>
            <div class="menu-1" v-if="menus">
                <Menu1 v-for="menu in menus" :key="menu.id" :menu="menu" @click.native="checkFirstMenu(menu)"></Menu1>
            </div>
            <div class="userinfo" v-if="user">欢迎您：{{user.name}}</div>
        </div>
        <div class="body">
            <div class="menu-2" v-if="checkedFirstMenu && checkedFirstMenu.children">
                <Menu2 v-for="menu in checkedFirstMenu.children" @click.native="checkSecMenu(menu)"
                       :key="menu.id"
                       :menu="menu"></Menu2>
            </div>
            <div class="main">
                <div class="menu-3" v-if="checkedSecMenu && checkedSecMenu.children">
                    <Menu3 v-for="menu in checkedSecMenu.children"
                           :key="menu.id"
                           :menu="menu"></Menu3>
                </div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    import Menu1 from "../../components/Menu1";
    import Menu2 from "../../components/Menu2";
    import Menu3 from "../../components/Menu3";

    export default {
        name: "Platform",
        data: function () {
            return {
                checkedFirstMenu: null,
                checkedSecMenu: null,
            }
        },
        methods: {
            checkFirstMenu: function (menu) {
                this.checkedFirstMenu = menu;
            },
            checkSecMenu: function (menu) {
                this.checkedSecMenu = menu;
            }
        },
        components: {
            Menu1,
            Menu2,
            Menu3,
        },
        computed: {
            ...mapState({
                user: 'user',
                menus: "menus"
            })
        },
        created() {
            this.$store.dispatch('refreshUser');
            this.$store.dispatch('refreshMenus');
        }
    }
</script>

<style scoped>
    .platform {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .head {
        display: flex;
        padding: 10px 20px;
        background-color: #5b5a5f;
        flex: 0 0 auto;
    }

    .title {
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }

    .logo {
        height: 30px;
        margin: 0 10px;
    }

    .text {
        display: inline-block;
        font-size: 36px;
        color: #fff;
        letter-spacing: 10px;
        font-weight: 800;
    }

    .body {
        flex: 1 1 500px;
        display: flex;
        overflow: hidden;
    }

    .menu-1 {
        flex: 1 1 auto;
        display: flex;
        justify-content: flex-end;
    }

    .userinfo {
        position: absolute;
        top: 4px;
        right: 10px;
        color: #fff;
        font-size: 14px;
    }

    .menu-2 {
        flex: 0 0 auto;
        overflow: auto;
    }

    .main {
        flex: 1 1 auto;
    }
</style>

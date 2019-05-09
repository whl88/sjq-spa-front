<template>
    <div class="platform">
        <MainHead class="head"></MainHead>
        <div class="body">
            <div class="menu-2">
                <Menu v-for="menu in [{id:'1',icon:'xx',name:'菜单1菜单1',url:'/platform/welcome'},{id:'2',icon:'x2x',name:'菜单2菜单2菜单2',url:'asdfa'}]"
                      :key="menu.id"
                :menu="menu"></Menu>
            </div>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
    import MainHead from '@/views/common/MainHead.vue';
    import Menu from '@/components/Menu.vue';

    export default {
        name: "Platform",
        components: {
            MainHead,
            Menu
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
        flex: 0 0 auto;
    }

    .body {
        flex: 1 1 500px;
        display: flex;
    }
    .menu-2{
        flex: 0 0 auto;
    }
</style>

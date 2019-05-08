<template>
    <div class="body">
        <div class="menus">
            <router-link class="menu" v-for="menu in menus" :to="menu.url" :key="menu.url">{{menu.text}}</router-link>
        </div>
        <div class="workspace">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "MainBody",
        props: {
        },
        computed:mapState([
            'menus'
        ])
    }
</script>

<style scoped>
    .body{
        display: flex;
        flex-direction:row;
    }
    .menus{
        padding:10px;
        flex:0 0 auto;
        background-color: #5B5A5F;
    }
    .menu{
        display:block;
        color: #fff;
        text-decoration: none;
        line-height: 1.2em;
        padding:5px;
    }
    .workspace{
        padding:10px;
        flex-grow: 1;
    }
</style>

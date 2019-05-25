<template>
    <router-link class="menu" :to="menu.url">
        <img class="icon" :src="menu.icon"/>
        <div class="name">{{menu.text}}</div>
    </router-link>
</template>

<script>
    export default {
        name: "Menu1",
        props: {
            menu:Object
        },
        methods:{
        }
    }
</script>

<style scoped>
    .menu{
        display: inline-block;
        margin:5px;
        padding:10px;
        border-radius: 4px;
        text-align: center;
        text-decoration-line: none;
    }
    .icon{
        width:40px;
        height:40px;
    }
    .name{
        font-size:14px;
        color: #ffffff;
    }
</style>

<template>
    <router-link class="menu" :to="menu.url">
        <img class="icon" :src="menu.icon"/>
        <span class="name">{{menu.text}}</span>
    </router-link>
</template>

<script>
    export default {
        name: "Menu3",
        props: {
            menu:Object
        }
    }
</script>

<style scoped>
    .menu{
        display: inline-block;
        margin:5px;
        padding:5px;
        border:1px solid #f0f0f0;
        border-radius: 4px;
        text-decoration-line: none;
    }
    .icon{
        width:20px;
        height:20px;
        vertical-align: middle;
        margin-right:5px;
    }
    .name{
        font-size:14px;
        color: #606060;
        vertical-align: middle;
    }
</style>

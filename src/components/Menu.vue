<template>
    <router-link class="menu" :to="menu.url">
        <img class="icon" :src="menu.icon"/>
        <div class="name">{{menu.name}}</div>
    </router-link>
</template>

<script>
    export default {
        name: "Menu",
        props: {
            menu:Object
        }
    }
</script>

<style scoped>
    .menu{
        display: block;
        margin:5px;
        padding:10px;
        border:1px solid #f0f0f0;
        border-radius: 4px;
        text-align: center;
    }
    .icon{
        width:40px;
        height:40px;
    }
    .name{
        font-size:14px;
        color: #606060;
    }
</style>

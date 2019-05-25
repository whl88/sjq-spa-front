<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    @import "~normalize.css";
    *{
        margin:0;
        padding:0;
    }
</style>

<script>
    import axios from 'axios'
    export default {
        name: 'App',
        data: function () {
            return {
            }
        },
        mounted () {
            axios.defaults.baseURL = 'http://127.0.0.1:3000/mock/13';
        }
    }
</script>

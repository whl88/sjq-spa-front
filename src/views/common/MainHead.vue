<template>
    <div class="head" @click="hello">
        <img class="logo" src="../../assets/logo.png"/>
        <div class="userinfo">欢迎您：</div>
    </div>
</template>

<script>
    export default {
        name: "MainHead",
        props: {
        },
        methods:{
            hello:function () {
                alert(this.user.name);
            }
        },
    }
</script>

<style scoped>
    .head{
        padding:10px 20px;
        background-color: #5b5a5f;
    }
    .logo{
        height: 30px;
        vertical-align: middle;
    }
    .userinfo{
        float: right;
        display: inline-block;
        line-height: 30px;
        color:#fff;
    }
</style>

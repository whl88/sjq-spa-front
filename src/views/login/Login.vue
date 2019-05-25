<template>
    <div>
        <div class="head">
            <div class="head-text">江苏公安大数据信息资源服务平台</div>
        </div>
        <div class="login-box">
            <div class="button" @click="doLogin">
                登录
            </div>
        </div>
    </div>
</template>
<style scoped>
    .head{
        position: relative;
    }
    .head-text{
        font-size:48px;
        color: #1900ff;
        height: 100px;
        text-align: center;
        line-height: 100px;
        background-color: rgba(64, 192, 255, 0.18);
    }
    .login-box{
        cursor:pointer;
        margin-top:30px;
        text-align: center;
    }
    .button{
        display: inline-block;
        border-radius: 10px;
        padding:30px 100px;
        font-size:65px;
        background-color: #1900ff;
        color:#fff;
        letter-spacing: 20px;
        text-indent: 20px;
    }
</style>
<script>
    import axios from 'axios'
    export default {
        name: 'Index',
        data: function () {
            return {
            }
        },
        methods:{
            doLogin:function () {
                axios.post('/api/main/login',{jh:'245325',password:'87'}).then(r => {
                    if('00' === r.data.code){
                        this.$router.push('/v');
                    }
                })
            }
        }
    }
</script>

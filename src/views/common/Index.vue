<template>
    <div>
        <div class="head">
            <div class="head-text">江苏公安大数据信息资源服务平台</div>
            <div class="link-box">
                <router-link class="platform-link" to="/platform">工作平台</router-link>
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
    .link-box{
        position:absolute;
        top:50%;
        transform: translate(0,-50%);
        right: 20px;
    }
    .platform-link {
        position: relative;
        color: #28c751;
        font-size:14px;
        text-decoration: none;
    }
</style>
<script>
    import axios from 'axios'
    export default {
        name: 'Index',
        data: function () {
            return {
                user: null
            }
        },
        mounted() {
            axios.get(this.$store.state.config.baseUrl + '/mock/user.json')
                .then(response => (this.user = response.data))
        }
    }
</script>

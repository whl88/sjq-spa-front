<template>
    <div class="platform">
        <MainHead class="head"></MainHead>
        <router-view ></router-view>
    </div>
</template>

<script>
    import MainHead from '@/views/common/MainHead.vue';
    import MainBody from '@/views/common/MainBody.vue';

    export default {
        name: "Platform",
        components:{
            MainHead,
            MainBody
        }
    }
</script>

<style scoped>
    .platform {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .head{
        flex: 0 0 auto;
    }
    .body{
        flex: 1 1 500px;
    }
</style>

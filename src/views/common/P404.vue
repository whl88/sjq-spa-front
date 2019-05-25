<template>
    <div class="tip">
        {{this.$route.path}}<br/>页面未找到！
    </div>
</template>

<script>
    export default {
        name: "P404"
    }
</script>

<style scoped>
    .tip{
        font-size:36px;
        color: #c6c6c6;
    }
</style>

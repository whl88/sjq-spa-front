<template>
    <div class="home">
        欢迎您：{{this.user.name}}
    </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data:function(){
            return {
                user:{}
            }
        }
    }
</script>

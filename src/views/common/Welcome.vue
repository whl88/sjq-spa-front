<template>
    <div class="home">
        欢迎您：{{this.user.name}}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Welcome',
        data:function(){
            return {
                user:null
            }
        },
        mounted () {
            axios.get(this.$store.state.config.baseUrl + '/mock/user.json')
                .then(response => (this.user = response.data))
        }
    }
</script>

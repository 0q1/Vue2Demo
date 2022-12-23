<template>
    <div>
        <slot name="home" msg="hone world!" :user="userinfo"></slot>
    </div>
</template>

<script>

export default{
    name:'Home',
    data() {
        return {
            userinfo:{
                username:'yjy'
            }
        }
    },
    methods: {

    }
}

</script>

<style scoped>

</style>
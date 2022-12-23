<template>
    <div class="right1">
        Right1
    </div>
</template>

<script>
export default{
    name:'Right1',
    activated(){
        console.log("Right1被激活了")
    },
    deactivated(){
        console.log("Right1被缓存了")
    }
}
</script>

<style scoped>
.right1{
    width: 100%;
    height: 300px;
    background-color: lawngreen;
}
</style>
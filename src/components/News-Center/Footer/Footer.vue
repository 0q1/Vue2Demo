<template>
    <van-tabbar v-model="active"  @change="onChange">
        <van-tabbar-item icon="home-o">主页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
        <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { Notify } from 'vant';

export default{
    name:'Footer',
    data(){
        return{
            active:0
        }
    },
    methods:{
        onChange(index) {
            Notify({ type: 'primary', message: index });
        },
    }
}

</script>

<style scoped>

</style>
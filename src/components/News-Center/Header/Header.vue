<template>
    <div>
        <van-nav-bar
                title="标题"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
                >
                <template #title>
                    新闻周刊
                </template>
                <template #right>
                    <van-icon name="search" size="18" />
                </template>
        </van-nav-bar>
        
    </div>
</template>

<script>
import { Toast } from 'vant';
export default{
    name:'Header',
    data(){
        return{

        }
    },
    methods:{
        onClickLeft() {
            Toast('返回');
        },
        onClickRight() {
            Toast('按钮');
        },
    }
}

</script>

<style scoped>
van-nav-bar{
    background-color: red;
}
</style>
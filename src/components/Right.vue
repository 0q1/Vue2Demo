<template>
    <div>
        <MyCount :init="5"></MyCount>
        <p>子组件的count:{{ count }}</p>
        <button @click="add">count+1</button>
        <p>msgFromLeft:{{ msgFromLeft }}</p>
    </div>
</template>

<script>
import bus from '@/bus/eventBus'
export default{
    name:'Right',
    props:{
        //子向父传值，需要自定义事件
    },
    computed:{

    },
    watch:{

    },
    data(){
        return{
            count:0,
            msgFromLeft:""
        }
    },
    methods:{
       add(){
        this.count+=1
        this.$emit('numchange',this.count)
       }
    },
    created(){
       bus.$on('share',val=>{
        this.msgFromLeft=val
       })
    }
}
</script>

<style lang="less">

</style>
<template>
    <div>
        <h5>Count组件</h5>
        <p>count的值是{{ count }}</p>
        <button @click="count+=1">+1</button>
    </div>
</template>

<script>
export default {
    name:"Count",
    props:{
        init:{
            default:0,//默认值
            type:Number,//数据类型
            required:false//必填项
        }
    },
    data(){
        return{
            count:this.init
        }
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        console.log("created");
    },
    beforeMount(){
        console.log("beforeMount");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate(){
        console.log("beforeUpdate");
    },
    updated(){
        console.log("updated");
    },
    beforeDestroy(){
        console.log("beforeDestory")
    },
    destroyed(){
        console.log("destroyed");
    }
}
</script>

<style lang="" scoped>
    
</style>
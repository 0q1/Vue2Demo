<template>
    <div class="left1">
        Left1
        <p><input type="text" v-color="msg" @input="fn"></p>
        <p>msg:{{ msg }}</p>
        <hr>
        <!-- 声明一个插槽 -->
        <slot name="pslot">pslot默认内容</slot>
        <slot name="pslot1"><span>pslot1</span></slot>
    </div>
</template>

<script>
export default{
    name:'Left1',
    activated(){
        console.log("Left1被激活了")
    },
    deactivated(){
        console.log("Left1被缓存了")
    },
    directives:{
        color:{
            //指令第一次创建时调用
            bind(el,binding){
                el.style.color='red'
            },
            update(el,binding){
                el.value = binding.value
            },
            
        }
    },
    data(){
        return{
            msg:''
        }
    },
    methods:{
        fn(event){
            this.msg=event.target.value
        }
    }

}
</script>

<style scoped>
.left1{
    width: 100%;
    height: 300px;
    background-color: bisque;
}
</style>
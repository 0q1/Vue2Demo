<template>
    <div>
        <p>msgs: <input type="text" v-model="msgs"></p>
    </div>
</template>

<script>
import bus from '@/bus/eventBus';

export default{
    name:'Son2',
    data(){
        return{
            msgs:""
        }
    },
    methods:{
        sendBrother(){
            bus.$on("sendbro",val=>{
                this.msgs = val
            })
        }
    },
    mounted(){
        this.sendBrother()
    },
    activated(){
        console.log("组件被激活了")
    },
    deactivated(){
        console.log("组件被缓存了")
    }
}
</script>

<style scoped>
</style>
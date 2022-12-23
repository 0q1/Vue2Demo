<template>
    <div>
        <MyCount :init="9" v-if="flag"></MyCount>
        <div>
           msg的值是: {{ msgs }}
           <br>
           user的值是: {{ users }}
        </div>
        <button @click="changeFlag">销毁MyCount</button>
        <p>leftMsg:{{ leftMsg }}</p>
        <button @click="sendMsg">sendMsgtoright</button>
    </div>
</template>

<script>
import bus from '@/bus/eventBus'
export default{
    name:'Left',
    props:{
        //父向子传值，在子里定义，父绑定
        msg:{
            default:"",
            type:String,
            required:false
        },
        user:{
            default:{},
            type:Object,
            required:false
        }
    },
    computed:{

    },
    watch:{

    },
    data(){
        return{
            flag:true,
            msgs:this.msg,
            users:this.user,
            leftMsg:"leftmsg!"
        }
    },
    methods:{
        changeFlag(){
            this.flag=!this.flag
        },
        sendMsg(){
            bus.$emit("share",this.leftMsg)
        }
    },
    mounted(){
        this.sendMsg()
    }

}
</script>

<style lang="less">

</style>
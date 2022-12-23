<template>
    <div>
        <p>msgs: <input type="text" v-model="msgs"></p>
        <p>objmsgs:{{ objmsgs }}</p>
        <button @click="sendParent">子传父</button>
    </div>
</template>

<script>
import bus from '@/bus/eventBus'
export default{
    name:'Son1',
    props:{
        msg:{
            default:"",
            type:String,
        },
        objmsg:{
            default:{},
            type:Object,
        }
    },
    data(){
        return{
            msgs:this.msg,
            objmsgs:this.objmsg,
            arr:['小红','小妹','小明','小强'],
            arr1:[
                {id:1,name:"西瓜",state:true,price:10,count:1},
                {id:2,name:"榴莲",state:true,price:20,count:2},
                {id:3,name:"草莓",state:true,price:30,count:3}
            ]
        }
    },
    methods:{
        sendParent(){
            this.$emit("objmsgschange",this.msgs)
        },
        //兄弟传值
        sendBrother(){
            bus.$emit("sendbro",this.msgs)
        },
        //arr some
        getArrSome(){
            this.arr.some((item,index)=>{
                console.log('ok')
                if(item==='小明'){
                    console.log(item)
                    return true
                }
            })
        },
        getArr1Every(){
            const result = this.arr1.every(item=>item.state==true)
            console.log(result)
        },
        getArr1Reduce(){
            const sum = this.arr1.filter(item=>item.state).reduce((amt,item)=>{
               return amt += item.price*item.count
            },0)
            console.log(sum)
        }
    },
    watch:{
        msg(newMsg){
            this.msgs=newMsg
        },
        msgs(newmsg){
            this.sendBrother()
        }
    },
    created(){
    //  this.getArrSome()   
    // this.getArr1Every()
    this.getArr1Reduce()
    }
}
</script>

<style scoped>
</style>
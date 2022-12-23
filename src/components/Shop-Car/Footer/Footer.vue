<template>
    <div class="footer">
        <el-col :span="6">
            <el-checkbox v-model="checked"  @change="handlerChecked"><span style="color:white">全选</span></el-checkbox>
        </el-col>
        <el-col :span="8">
            合计：<span style="color:red">￥{{ totalPrice.toFixed(2) }}</span>
        </el-col>
        <el-col :span="6">
            <el-button type="primary" round @click="submitBtn"><span>结算</span><span>({{ totalCount }})</span></el-button>
        </el-col>
    </div>
</template>

<script>
import { MessageBox } from 'element-ui';
export default{
    name:'Footer',
    props:{
        isfull:{
            default:false,
            type:Boolean
        },
        totalPrice:{
            default:0,
            type:Number
        },
        totalCount:{
            default:0,
            type:Number
        }
    },
    watch:{
        isfull:{
            handler(newVal){
                this.checked=newVal
            },
            immediate:false
        }
    },
    data(){
        return {
            checked:this.isfull,
        }
    },
    methods:{
        handlerChecked(e){
            this.checked=e
            this.$emit("full-change",this.checked)
        },
        submitBtn(){
            console.log(`总价${this.totalPrice}`)
            MessageBox.confirm(
                '消息',
                '123',
            ).then(item=>{
                console.log("res")
            })
        }
    }
}
</script>

<style scoped>
.footer{
    width: 100%;
    height: 60px;
    line-height: 60px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    font-size: 14px;
    color: white;
    background-color:blueviolet;
    text-align: center;
    
}
</style>
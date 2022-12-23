<template>
    <li class="infinite-list-item">
        <el-row type="flex" class="row-bg">
            <el-col :span="6"> 
                <el-checkbox v-model="pgoods.goods_state" @change="handleState"></el-checkbox>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">
                    <img :src="pgoods.goods_img" class="goods-img">
                </div>
            </el-col>
            <el-col :span="17">
                <div class="grid-content bg-purple-light">
                    <el-row type="flex" class="row-bg" >
                        <span style="font-size:14px">{{ pgoods.goods_name }}</span>
                    </el-row>
                    <el-row type="flex" class="row-bg"> 
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <span class="goods-price">￥{{ pgoods.goods_price }}</span>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple">
                                <slot name="default"></slot>
                                <!-- <MyCounter :count="pgoods.goods_count" @get-count="getCount"></MyCounter> -->
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </li>
</template>

<script>
import Counter from '@/components/Shop-Car/Counter/Counter.vue'
export default{
    name:'Goods',
    components:{
        'MyCounter':Counter
    },
    props:{
        pgoods:{
            default:{
                id:0,
                goods_name:'',
                goods_img:'',
                goods_price:0,
                goods_count:0,
                goods_state:false
            },
            type:Object
        }
    },
    data(){
        return {
           
        }
    },
    methods:{
        handleState(){
            this.$emit("state-change",{id:this.pgoods.id,value:this.pgoods.goods_state})
        },
        getCount(val){
            this.pgoods.goods_count=val
        }
    }
}
</script>

<style scoped>
.goods-box{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 100px;
    border-bottom: 1px solid aliceblue;
    float: left;
}
.goods-img{
    width: 80px;
    height: 80px;
    float: left;
}
</style>
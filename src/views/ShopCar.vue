<template>
    <div>
        <el-container>
            <el-header>
                <MyHeader></MyHeader>
            </el-header>
            <el-main>
                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                    <MyGoods v-for="(item,index) in list" :key="item.id" :pgoods="item" @state-change="getNewState">
                        <Counter :count="item.goods_count" @get-count="getNewCount(item,$event)"></Counter>
                    </MyGoods>
                </ul>
                </el-main>
            <el-footer>
                <MyFooter :isfull="fullState" :totalPrice="amout" :totalCount="tcount" @full-change="fullChange"></MyFooter>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Header from '@/components/Shop-Car/Header/Header.vue'
import Goods from '@/components/Shop-Car/Goods/Goods.vue'
import Footer from '@/components/Shop-Car/Footer/Footer.vue'
import Counter from '@/components/Shop-Car/Counter/Counter.vue'
import axios from 'axios'
export default{
    name:'shopCar',
    computed:{
        //动态计算出全选的状态是true还是false
        fullState(){
            const res = this.list.every(item=>item.goods_state===true)
            return res
        },
        //已勾选商品的总价格
        amout(){
           const sum = this.list.filter(item=>item.goods_state).reduce((total,item)=>total+=item.goods_price*item.goods_count,0)
            return sum
        },
        tcount(){
            const sum = this.list.filter(item=>item.goods_state).reduce((total,item)=>total+=item.goods_count,0)
            return sum;
        }
    },
    components:{
        'MyHeader':Header,
        'MyGoods':Goods,
        'MyFooter':Footer,
        Counter
    },
    data(){
        return {
            list:[],
            fullchecked:false
        }
    },
    methods:{
       async InitCartList(){
          const {data:res} = await axios.get("https://www.escook.cn/api/cart")
          if(res.status==200){
            this.list = res.list
          }
        },
        getNewState(val){
            this.list.some(item=>{
                if(item.id===val.id){
                    item.goods_state=val.value
                }
                return true
            })
        },
        fullChange(val){
            this.list.forEach(item=>item.goods_state=val)
        },
        load () {
            
        },
        getNewCount(item,val){
            //获取counter组件发来的最新的值
            item.goods_count=val
        }
    },
    created(){
        this.InitCartList()
    }
    //https://www.escook.cn/api/cart
}
</script>

<style scoped>

</style>
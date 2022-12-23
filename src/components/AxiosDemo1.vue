<template>
    <div>
        <table>
            <thead>
                <td>编号</td>
                <td>图书名称</td>
            </thead>
            <tbody>
                <tr v-for="(item,index) in books" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import request from '@/api/request';
import axios from 'axios'
export default{
    name:'AxiosDemo1',
    props:{

    },
    computed:{

    },
    watch:{

    },
    data(){
        return{
            books:[]
        }
    },
    methods:{
       async AxiosGet1(){
            const {data:res} = await axios({
                method:'GET',
                url:'../1.json',
                //url中的查询参数
                params:{
                    id:1
                },
                //请求体参数
                data:{}
            })
            this.books=res.data
        }
    },
    created(){
        this.AxiosGet1()
    }
}
</script>

<style lang="less">

</style>
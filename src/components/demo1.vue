<template>
    <div>
    <input type="text" v-model.number="rgb.r">
    <input type="text" v-model.number="rgb.g">
    <input type="text" v-model.number="rgb.b">
    <div class="box" :style="{backgroundColor:getrgb}">{{ getrgb }}</div>
    <hr>
    <p>watch<input type="text" v-model="info.username"></p>
    <hr>
    <input type="text" v-model="message">
    <p>{{ message| capi }}</p>
    <div>
        <el-col :span="5">
            <el-input v-model.trim="name"></el-input>
        </el-col>
        <el-col :span="2">
            <el-button type="primary"  @click="add">添加</el-button>
        </el-col> 
    </div>
    <hr>
    <div>
        <table>
            <thead>
                <td>#</td>
                <td>品牌名称</td>
                <td>状态</td>
                <td>创建时间</td>
                <td>操作</td>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>
                        <el-switch v-model="item.status"></el-switch>
                    </td>
                    <td>
                        {{ item.createtime|dateFormat }}
                    </td>
                    <td>
                        <el-button type="remove"  @click="del(item.id)">删除</el-button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default{
    name:"demo1",
    computed:{
        getrgb(){return `rgb(${this.rgb.r},${this.rgb.g},${this.rgb.b})`}
    },
    data(){
        return{
            rgb:{
                r:0,
                g:0,
                b:0
            },
            info:{
                username:''
            },
            message:'message1',
            name:'',
            nextId:5,
            list:[
            {id:1,name:"宝马",status:true,createtime:'2022-10-10 08:00:00'},
                {id:2,name:"奔驰",status:false,createtime:'2022-10-20 08:00:00'},
                {id:3,name:"沃尔沃",status:true,createtime:'2021-9-10 08:00:00'},
                {id:4,name:"红旗",status:true,createtime:'2022-11-10 08:00:00'},
            ]
        }
    },
    watch:{
        // username(newVal,oldVal){
        //     console.log(newVal,oldVal)

        // }
        info:{
            //侦听器的处理函数
            handler(newVal,oldVal){
                console.log(newVal,oldVal)
            },
            //一进入页面自动触发一次
            immediate:true,
            deep:true
        }
    },
    filters:{
        capi(val){
            const first =val.charAt(0).toUpperCase();
            const other = val.slice(1)
            return first+other;
        },
        dateFormat(val){
            //YYYY-MM-DD HH:mm:ss
            return dayjs(val).format('YYYY-MM-DD HH:mm:ss');
        }
    },
    methods:{
        add(e){
            console.log(this.name)
            if(this.name===''){
                this.$message({
                type: 'warning',
                message: '不能为空!'
            });
            return ;
            }
            let obj = {
                id:this.nextId,
                name:this.name,
                status:false,
                createtime:new Date()
            }
            this.list.push(obj)
            this.name=''
            this.nextId+=1
            this.$message({
                type: 'success',
                message: '添加成功!'
            });
        },
        del(e){
           this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            this.list = this.list.filter(i=>i.id!=e)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        }
    }
}
</script>

<style>
.box{
    width: 100%;
    height: 100px;
}
</style>
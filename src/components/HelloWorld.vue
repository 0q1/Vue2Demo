<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Demo1></Demo1>
    <hr>
    <p><input type="text" :placeholder="tips" v-model="string1"></p>
    <p>-反转-</p>
    <p>{{ string1.split('').reverse().join('') }}</p>
    <hr>
    count-n:<input type="number" :placeholder="count.tips" v-model.number="count.n">
    <div>count的值是{{ count.count }}</div>
    <div><button @click="sub(count.n,$event)" @keyup.16.189="sub(count.n,$event)">-{{ count.n }}</button><button @click="re0(0,$event)">reset</button><button @click="add(count.n,$event)" @keyup.16.187="sub(count.n,$event)">+{{count.n}}</button></div>
    <hr>
    <a href="https://www.baidu.com" @click.prevent="tobaidu">跳转百度</a>
    <hr>
    <div v-show="true">
      <input type="text" v-model.trim="type">
      <div v-if="type=='A'">优秀</div>
      <div v-else-if="type=='B'">良好</div>
      <div v-else-if="type=='C'">一般</div>
      <div v-else>差</div>
    </div>
    <hr>
    <table>
      <thead>
        <td>索引</td>
        <td>编号</td>
        <td>姓名</td>
        <td>操作</td>
      </thead>
      <tbody>
        <tr v-for="(item,index) in lists" :key="item.id">
        <td>{{ index }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.operate }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <el-table
      :data="lists"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="operate"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Demo1 from './demo1.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Demo1
  },
  data(){
    return{
      count:{
        n:1,
        count:0,
        tips:"请输入要变化的值"
      },
      tips:'请输入姓名',
      string1:'杨佳怡yangjiayi',
      type:'A',
      lists:[
        {id:1,name:'yjy',operate:'修改 删除'},
        {id:2,name:'azs',operate:'修改 删除'},
        {id:3,name:'asv',operate:'修改 删除'}
      ]
    }
  },
  methods:{
    tobaidu(e){
      //e.preventDefault();
      console.log(e)
      
    },
    sub(n,e){
      
      this.count.count-=n
      this.changeStyleBackgroundColor(this.count.count,e)
    },
    re0(n,e){
      this.count.count=n
    },
    add(n,e){
      this.count.count+=n
      this.changeStyleBackgroundColor(this.count.count,e)
    },
    changeStyleBackgroundColor(n,e){
      console.log(e)
      e.preventDefault()
      if(n%2===0){
        e.target.style.backgroundColor='red'
      }
      else{
        e.target.style.backgroundColor=''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

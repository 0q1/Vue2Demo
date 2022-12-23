<template>
  <div class="about">
    <h1>This is an about page</h1>
    <hr>
    <AxiosDemo1></AxiosDemo1>
    <hr>
    <div class="aboutbox">
      <div  class="boxpanel"  style="background-color:aquamarine">
        <Left :msg="message" :user="userinfo"></Left>
      </div>
      <div  class="boxpanel"  style="background-color:antiquewhite">
        <Right @numchange="getNewCount"></Right>
      </div>
      <button @click="delmessage">清空message</button>
      <p>父组件的count:{{ countFromSon }}</p>
    </div>
    <div class="box2">

      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple" style="background-color:aliceblue">
            <Son1 :msg="son1msg" :objmsg="son1objmsg" @objmsgschange="getObjMsgChange"></Son1>
          </div></el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple" style="background-color:violet">
            <Son2></Son2>
          </div></el-col>
          <el-col :span="8">
          <div class="grid-content bg-purple" style="background-color:violet">
            <p>msg:{{ msg }}</p>
            改变父son1msg数据：<input type="text" v-model="son1msg">
          </div></el-col>
      </el-row>
      
    </div>
    <hr>
    <div class="box3">
      <button @click="changeLeft1">Left1</button>
        <button @click="changeRight1">Right1</button>
      <keep-alive include="Left1,Right1">
        <component :is="conName"></component>
      </keep-alive>
      <Left1>
        <!-- 如果要把内容填充到指定name的区域，需要使用template包裹 -->
        <!-- v-slot:指令的简写是# -->
        <template #pslot>
          <p>这是一个在Left1组件区域内容,声明的p标签内容</p>
        </template>
      </Left1>
    </div>
  
  </div>
</template>

<script>
import AxiosDemo1 from '@/components/AxiosDemo1.vue'
import Left from '@/components/Left.vue'
import Right from '@/components/Right.vue'
import Left1 from '@/components/Left1.vue'
import Right1 from '@/components/Right1.vue'
import Son1 from '@/components/Son1.vue'
import Son2 from '@/components/Son2.vue'

export default{
  name:'AboutView',
  components:{
    AxiosDemo1,
    Left,
    Right,
    Son1,
    Son2,
    Left1,
    Right1
  },
  data(){
    return{
      message:"hello AboutView.vue",
      userinfo:{name:"yjy",age:"22"},
      //定义数据项接受子组件传来的值
      countFromSon:0,
      son1msg:"son1msg",
      son1objmsg:{
        user:"son1",
        pwd:"son1pwd"
      },
      msg:"",
      conName:'Left1'
    }
  },
  methods:{
    delmessage(){
      this.message='',
      this.userinfo={}
    },
    getNewCount(val){
      this.countFromSon=val
    },
    getObjMsgChange(val){
      this.msg=val
    },
    changeComponent(){
      if(this.conName==='Son1'){
        this.conName='Son2'
      }else{
        this.conName='Son1'
      }
    },
    changeLeft1(){
      this.conName='Left1'
    },
    changeRight1(){
      this.conName='Right1'
    }
  },

}

</script>

<style scoped>

.aboutbox{
  width: 100%;
  height: 400px;
  background-color: aqua;
}
.boxpanel{
  float: left;
  width: 50%;
  height: 300px;
  box-shadow: 1px 2px 1px 1px cadetblue;
}
.box2{
  width: 100%;
  height: 400px;
  background-color: antiquewhite;
}
.box3{
  width: 100%;
  height: 400px;
  background-color: antiquewhite;
}
</style>
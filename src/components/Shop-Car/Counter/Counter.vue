<template>
    <div class="goods-info-bottom">
        <el-input-number v-model="counts" @change="handleChange" :min="1" :max="100"></el-input-number>
    </div>
</template>

<script>
export default{
    name:'Counter',
    props:{
        count:{
            default:1,
            type:Number
        }
    },
    data(){
        return{
            counts:this.count
        }
    },
    methods:{
        handleChange(value) {
            this.counts =value
            this.$emit("get-count",this.counts)
      }
    }
}
</script>

<style scoped>

</style>
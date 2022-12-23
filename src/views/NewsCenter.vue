<template>
    <div class="container">
        <Header></Header>
        <Center></Center>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/News-Center/Header/Header.vue'
import Center from '@/components/News-Center/Center/Center.vue'
import Footer from '@/components/News-Center/Footer/Footer.vue'
import {Toast} from 'vant'
export default{
    name:'NewsCenter',
    components:{
        Header,
        Center,
        Footer
    },
    methods:{
       
    }
}

</script>

<style scoped>
</style>
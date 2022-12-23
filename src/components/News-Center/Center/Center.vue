<template>
    <div>
        <Home>
            <template #home="obj">
                <van-empty :description="descript">
                    <p>{{ obj.msg }}</p>
                    <p>{{ obj.user.username }}</p>
                    <van-button round type="danger" class="bottom-button">按钮</van-button>
                </van-empty>
            </template>
        </Home>
    </div>
</template>

<script>
import Home from '@/components/News-Center/Center/TabbarPage/Home.vue'
import Friend from '@/components/News-Center/Center/TabbarPage/Friend.vue'
import Search from '@/components/News-Center/Center/TabbarPage/Search.vue'
import Setting from '@/components/News-Center/Center/TabbarPage/Setting.vue'
export default{
    name:'Center',
    components:{
        Home,
        Friend,
        Search,
        Setting
    },
    data() {
        return {
            comName:'Home',
            descript:'home'
        }
    },
    methods: {

    }
}

</script>

<style scoped>
.bottom-button {
    width: 160px;
    height: 40px;
  }
</style>
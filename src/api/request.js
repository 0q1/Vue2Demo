import axios from 'axios'

const request = axios.create({
    baseURL:"http://yufei.shop:3000"
})

export default request;
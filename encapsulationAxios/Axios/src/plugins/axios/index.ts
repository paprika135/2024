import Axios from "./axios"

const http = new Axios({
    baseURL:'/api',
    timeout:2000,
    headers:{}
})

export {
    http
}
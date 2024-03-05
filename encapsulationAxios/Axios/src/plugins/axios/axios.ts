import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export default class Axios {
    private instance;//创建请求实例
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
        this.interceptor();
    }

    public async request<T,R = AxiosResponse<T>>(config: AxiosRequestConfig):Promise<R>{
        return new Promise(async (resolve,reject)=>{
            try {
                const response = await this.instance.request<T>(config)
                resolve(response as R)
            } catch (error) {
                reject(error);
            }
        })
    }

    private interceptor(){
        this.requestInterceptors();
        this.responseInterceptors();
    }

    //定义axios请求拦截器
    private requestInterceptors() {
        this.instance.interceptors.request.use((config) =>{
            // 在发送请求之前做些什么
            return config;
        }, (error) =>{
            // 对请求错误做些什么
            return Promise.reject(error);
        })
    }

    //定义axios响应拦截器
    private responseInterceptors(){
        this.instance.interceptors.response.use((response)=> {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            return response;
          }, (error)=> {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
          })
    }
}
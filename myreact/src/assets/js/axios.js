// 引入aixos
import axios from 'axios'
// 引入loading组件
import {Toast} from 'antd-mobile'
// 添加请求拦截器
axios.interceptors.request.use(function(config){
	// 添加loading
    Toast.loading('加载中')
    // 在axios的请求拦截器中添加axios请求的路径抬头
    // 将请求路径中的http://locahost:8888去掉           
    config.url = '/ray/api' + config.url

    // 添加axios请求的参数默认值
	config.data = config.data || {}

    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function(response){
    Toast.hide()

	// // 获取前端是否需要跳转到登录页的参数
	// const noLogin = JSON.parse(response.config.data).noLogin

	// // 如果token失效，并且需要登录的时候，才会跳转到登录页
	// if(response.data.code == -2 && !noLogin) createHashHistory().push('/user/login')
    
	// 只返回服务器的响应内容,其实就是res.send里面的数据
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})
export default axios

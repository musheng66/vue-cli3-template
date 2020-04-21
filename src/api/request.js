import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from '@/store'
import router from '@/router'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 10000, // 请求超时时间
  withCredentials: true
})
// NProgress Configuration
NProgress.configure({
  showSpinner: false
})
// 请求拦截器
service.interceptors.request.use(config => {
  NProgress.start() // start progress bar
  if (config.method === 'post') {
    // 在body中设置data，将json转化为字符串类型
    config.data = config.data || config.params
    delete config.params
  }
  switch (config.paramType) {
    case 'raw':
      config.data = config.data || config.params
      break
    case 'form':
      let dataEncode = ''
      config.data = config.data || config.params
      for (let item in config.data) {
        dataEncode += encodeURIComponent(item) + '=' + encodeURIComponent(config.data[item]) + '&'
      }
      config.data = dataEncode
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      break
    default:
      break
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(
  // 成功
  response => {
    NProgress.done()
    // console.log('Response From: ' + response.config.url);
    // console.log(response);
    // 可根据自定义 status 判断状态，自定义 status 最好放在响应返回的 data 对象中
    const res = response.data
    if (String(res.returnCode) === '1000') {
      return res
    }
    if (String(res.returnCode) === '100' || String(res.returnCode) === '200') {
      return res.returnData
    } else if (String(res.returnCode) === '20011') {
      Message({
        showClose: true,
        message: res.returnMsg,
        type: 'error',
        duration: 500,
        onClose: () => {
          store.dispatch('user/fedLogout').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        }
      })
      // return Promise.reject(new Error('未登录'))
    } else {
      Message({
        message: res.returnMsg,
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(res)
  },
  error => {
    NProgress.done()
    // 失败
    // console.log('Request Error From: ' + error.config.url);
    // console.error(error); // for debug
    // error.response.status 为后台返回给浏览器的状态码
    if (error.response.status === 403) {
      Message({
        message: '身份认证已失效，请重新登录',
        type: 'error',
        duration: 1000,
        onClose: () => {
          store.dispatch('user/fedLogout').then(() => {
            router.push({ path: '/login' })
          })
        }
      })
    } else {
      Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
      })
    }
    return Promise.reject(error)
  })

export default service

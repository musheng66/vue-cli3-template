import request from '@/api/request'

/**
 * @Description 根据用户名和密码登录
 * @Param {String} username 用户名
 * @Param {String} password 密码
 * @return {*} 接口数据
 */
export function loginByUsername (username, password) {
  const data = {
    username: username,
    password: password
  }
  // 此处判断是由于 mock 会拦截所有请求，而此版本的 mock 存在上传/下载的 bug，下载数据会被转换为字符串，导致下载失败，故此处增加一层判断，直接调用本地方法
  // 如想使用 mock 且对上传/下载无特殊要求则可免去此判断
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

/**
 * @Description 退出登录
 * @return {*} 接口数据
 */
export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

/**
 * @Description 根据 token 获取用户信息
 * @Param {String} token
 * @return {*} 接口数据
 */
export function getUserInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

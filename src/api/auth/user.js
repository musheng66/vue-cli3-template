// import request from '@/api/request'
/**
 * 此处暂时给定登录用户为admin
 */
/**
 * @description 根据用户名和密码登录
 * @param {String} username 用户名
 * @param {String} password 密码
 * @return {*} 接口数据
 */
export function loginByUsername (username, password) {
  // const data = {
  //   username: username,
  //   password: password
  // }
  // return request({
  //   url: '/user/login',
  //   method: 'post',
  //   data
  // })
  return Promise.resolve({ token: 'admin-token' })
}

/**
 * @description 退出登录
 * @return {*} 接口数据
 */
export function logout () {
  // return request({
  //   url: '/user/logout',
  //   method: 'post'
  // })
  return Promise.resolve('success')
}

/**
 * @description 根据 token 获取用户信息
 * @param {String} token
 * @return {*} 接口数据
 */
export function getUserInfo (token) {
  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
  return Promise.resolve({
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: '/img/logo.jpg',
    name: 'Super Admin'
  })
}

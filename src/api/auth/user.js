// import request from '@/api/request'
/**
 * 此处暂时给定登录用户为admin，使用apim中的接口处理登录
 */
/**
 * @Description 根据用户名和密码登录
 * @Param {String} username 用户名
 * @Param {String} password 密码
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
 * @Description 退出登录
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
 * @Description 根据 token 获取用户信息
 * @Param {String} token
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

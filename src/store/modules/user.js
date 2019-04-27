// import { loginByUsername, logout, getUserInfo } from '@/api/auth/user'
import { getToken, setToken, removeToken, setRoles, removeRoles, setName, removeName } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  setting: {
    articlePlatform: []
  }
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(JSON.stringify(token))
  },
  SET_NAME: (state, name) => {
    state.name = name
    setName(JSON.stringify(name))
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
    setRoles(JSON.stringify(roles))
  }
}

const actions = {
  // 用户名登录
  loginByUsername ({ commit }, userInfo) {
    // const username = userInfo.username.trim()
    // return new Promise((resolve, reject) => {
    //   loginByUsername(username, userInfo.password).then(response => {
    //     const data = response.data
    //     commit('SET_TOKEN', data.token)
    //     commit('SET_NAME', data.name)
    //     resolve(response)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    // 本地模拟
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', 'admin')
      commit('SET_NAME', '超管')
      resolve()
    })
  },
  // 获取用户信息
  getUserInfo ({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   getUserInfo(state.token).then(response => {
    //     if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
    //       reject(new Error('login error'))
    //     }
    //     const data = response.data
    //     commit('SET_NAME', data.name)
    //     commit('SET_TOKEN', getToken())
    //     commit('SET_ROLES', data.roles)
    //     commit('SET_AVATAR', data.avatar)
    //     resolve(response)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    // 本地模拟
    return new Promise((resolve, reject) => {
      let data = {
        roles: ['admin'],
        name: '超管',
        token: 'admin'
      }
      commit('SET_TOKEN', data.token)
      commit('SET_NAME', data.name)
      commit('SET_ROLES', data.roles)
      resolve(data)
    })
  },
  // 登出
  logout ({ commit, state }) {
    // return new Promise((resolve, reject) => {
    //   logout(state.token).then(() => {
    //     commit('SET_TOKEN', '')
    //     commit('SET_ROLES', [])
    //     commit('SET_NAME', '')
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
    // 本地模拟
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      commit('SET_NAME', '')
      removeToken()
      removeRoles()
      removeName()
      resolve()
    })
  },
  // 前端 登出
  fedLogout ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

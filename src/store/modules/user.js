// import { loginByUsername, logout, getUserInfo } from '@/api/auth/user'
import { getToken, setToken, removeToken, setRoles, removeRoles, setName, removeName } from '@/utils/auth'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  getters: {
    name: (state, getters, rootState) => {
      return state.name
    },
    roles: (state) => {
      return state.roles
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      // const username = userInfo.username.trim()
      // return new Promise((resolve, reject) => {
      //   loginByUsername(username, userInfo.password).then(response => {
      //     const data = response.data
      //     commit('SET_TOKEN', data.token)
      //     commit('SET_NAME', data.name)
      //     // 将登录信息存放在session中
      //     setToken(data.token)
      //     setRoles(data.roles)
      //     setName(data.name)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      // 本地模拟
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', 'admin')
        commit('SET_NAME', '超管')
        // 将登录信息存放在session中
        setToken('admin')
        setRoles(['admin'])
        setName('超管')
        resolve()
      })
    },
    // 获取用户信息
    GetUserInfo ({ commit, state }) {
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
      //     setToken(data.token)
      //     setRoles(data.roles)
      //     resolve(response)
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
      // 本地模拟
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', 'admin')
        commit('SET_NAME', '超管')
        commit('SET_ROLES', ['admin'])
        // 将登录信息存放在session中
        setToken('admin')
        setRoles(['admin'])
        setName('超管')
        resolve()
      })
    },
    // 登出
    LogOut ({ commit, state }) {
      // return new Promise((resolve, reject) => {
      //   logout(state.token).then(() => {
      //     commit('SET_TOKEN', '')
      //     commit('SET_ROLES', [])
      //     commit('SET_NAME', '')
      //     removeToken()
      //     removeRoles()
      //     removeName()
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
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_LOGINTIME', '')
        removeToken()
        resolve()
      })
    }
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_LOGINTIME: (state, time) => {
      state.logintime = time
    }
  }
}

export default user

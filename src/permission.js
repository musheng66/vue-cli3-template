import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 网页加载条
import 'nprogress/nprogress.css'// 网页加载条样式
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress 网页加载条配置

// 权限验证
function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin 拥有所有权限
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login'] // 路由白名单，不进行登录验证

router.beforeEach((to, from, next) => {
  NProgress.start() // 加载条开始
  if (getToken()) { // 校验是否存在 token
    /* 存在 token */
    if (to.path === '/login') {
      // 当判断已登录时，/login 路由直接跳转到主页
      next({ path: '/' })
      NProgress.done() // 若当前页是主页，跳转时不会进行路由转换，所以手动处理
    } else {
      // 由于只有一个管理员角色，无需每次刷新验证权限，现暂时去掉拉取 user_info 的逻辑，使用 sessionStorage 存放 user_info，此处直接根据角色生成菜单
      if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完 user_info 信息
        store.dispatch('GetUserInfo').then(res => { // 拉取 user_info
          // const roles = res.data.roles // roles 必须是数组，如: ['editor','develop']
          // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
          //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          //   next({ ...to, replace: true }) // hack 方法 确保 addRoutes 已完成，set the replace: true so the navigation will not leave a history record
          // })
          next({ ...to, replace: true })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('获取权限失败，请重新登录！')
            next({ path: '/login' })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()//
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // 若当前页是登录页，跳转时不会进行路由转换，所以手动处理
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

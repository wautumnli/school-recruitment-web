import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })

const routes = [
  {
    // 懒加载
    path: '/',
    component: () => import('@/components/Index.vue'),
    redirect: '/',
    children: [
      {
        path: '/',
        component: () => import('@/components/Home.vue'),
        meta: {
          title: 'USC 校园招聘平台'
        }
      },
      {
        path: '/school',
        component: () => import('@/components/School.vue'),
        meta: {
          title: '校招 - USC 校园招聘平台'
        }
      },
      {
        path: '/interview',
        component: () => import('@/components/Interview.vue'),
        meta: {
          title: '面经 - USC 校园招聘平台'
        }
      },
      {
        path: '/file',
        component: () => import('@/components/File.vue'),
        meta: {
          title: '资料 - USC 校园招聘平台'
        }
      },
      {
        path: '/login',
        component: () => import('@/components/Logon.vue'),
        meta: {
          title: '登录 - USC 校园招聘平台'
        }
      }
    ]
  }
]

/**
 * router使用history模式s
 */
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 路由冗余报错处理
 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/**
 * 全局路由,跳转前
 */
router.beforeEach((to, from, next) => {
  // 修改页面title
  document.title = to.meta.title
  NProgress.start()
  // 继续进行
  next()
})

/**
 * 全局路由跳转后
 */
router.afterEach(() => {
  NProgress.done()
})

export default router

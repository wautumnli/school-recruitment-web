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
          title: '招聘 - USC 校园招聘平台'
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
        path: '/user/interview',
        component: () => import('@/components/UserInterview.vue'),
        meta: {
          title: '用户面经 - USC 校园招聘平台'
        }
      },
      {
        path: '/user/file',
        component: () => import('@/components/UserFile.vue'),
        meta: {
          title: '用户文件 - USC 校园招聘平台'
        }
      },
      {
        path: '/user/school',
        component: () => import('@/components/UserSchool.vue'),
        meta: {
          title: '用户招聘信息 - USC 校园招聘平台'
        }
      },
      {
        path: '/user/info',
        component: () => import('@/components/UserInfo.vue'),
        meta: {
          title: '用户信息 - USC 校园招聘平台'
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/components/Admin.vue'),
    redirect: '/admin/home',
    children: [
      {
        path: '/admin/home',
        component: () => import('@/components/AdminHome.vue'),
        meta: {
          title: '后台管理 - 详细页'
        }
      },
      {
        path: '/admin/user',
        component: () => import('@/components/AdminUser.vue'),
        meta: {
          title: '后台管理 - 用户'
        }
      },
      {
        path: '/admin/file',
        component: () => import('@/components/AdminFile.vue'),
        meta: {
          title: '后台管理 - 文件'
        }
      },
      {
        path: '/admin/interview',
        component: () => import('@/components/AdminInterview.vue'),
        meta: {
          title: '后台管理 - 面经'
        }
      },
      {
        path: '/admin/school',
        component: () => import('@/components/AdminSchool.vue'),
        meta: {
          title: '后台管理 - 招聘信息'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/components/Logon.vue'),
    meta: {
      title: '登录 - USC 校园招聘平台'
    }
  },
  {
    path: '/regist',
    component: () => import('@/components/Register.vue'),
    meta: {
      title: '注册 - USC 校园招聘平台'
    }
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
  if(to.path === '/login' || to.path === '/regist') return next()
  const token = localStorage.getItem("token");
  if(!token) return next("/login")
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

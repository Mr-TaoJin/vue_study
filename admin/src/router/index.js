import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login' //登录页面
import Layout from '@/layout/layout' //布局

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: {icon: 'question',title: '首页'}
      }
    ]
  },
  {
    path: '/introduction',
    component: Layout,
    redirect: '/introduction/index',
    // alwaysShow: true,
    meta: {
      icon: 'svg-aperture',
      title: '简述'
    },
    children: [
      {
        path: 'index',
        name: 'Introduction',
        component: () => import('@/views/introduction/index'),
        meta: {icon: 'question', title: '简述'}
      }
    ]
  },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/home',
  //   meta: {
  //     icon: 'svg-aperture',
  //     title: '首页'
  //   },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Introduction',
  //       component: () => import('@/views/home'),
  //       meta: {icon: 'warning', title: '首页1'}
  //     }
  //   ]
  // },
  {
    path: '/user',
    component: Layout,
    // hidden: true,
    meta: {
      icon: 'tickets',
      title: '个人中心'
    },
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'warning', title: '个人中心'}
      },
      {
        path: 'avatar',
        name: 'Avatar',
        component: () => import('@/views/user/profile'),
        meta: {icon: 'warning', title: '修改头像'}
      }
    ]
  },
  
]
export default new Router({
  // mode: 'history',  require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = []
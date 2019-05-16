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
        meta: {title: '首页'}
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
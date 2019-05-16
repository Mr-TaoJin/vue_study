import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import A_page from '@/components/A_page'
const Index = () => import(/* webpackChunkName: "Index" */'containers/Index')             //搜索列表 

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'A',
      component: A_page
    }
  ]
})

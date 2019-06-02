import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import father from '@/components/father'
import child from '@/components/child'

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
      name: 'father',
      component: father
    },
    {
      path: '/',
      name: 'child',
      component: child
    }
  ]
})

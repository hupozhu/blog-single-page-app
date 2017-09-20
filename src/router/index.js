import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {
    path: '/',
    name: '首页',
    redirect: '/article',
    component: Layout,
    children: [
      { path: 'article', component: _import('article/index') }
    //   {
    //     path: '/category',
    //     component: category
    //   },
    //   {
    //     path: '/tag',
    //     component: tag
    //   },
    //   {
    //     path: '/about',
    //     component: about
    //   }
    ]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

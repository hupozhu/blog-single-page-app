import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import 'at-ui-style'
import AtUI from 'at-ui'
import './assets/fonticon/iconfont.css'

Vue.use(Router)
Vue.use(AtUI)

let routes = [
  {
    path: '/',
    name: 'index',
    component: App
    // children: [
    //   {
    //     path: '/article',
    //     component: article
    //   },
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
    // ]
  }
]

let router = new Router({
  'linkActiveClass': 'active',
  routes
})

let app = new Vue({
  router
}).$mount('#app')

export default app

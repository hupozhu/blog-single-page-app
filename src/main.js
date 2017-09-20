import Vue from 'vue'
import router from './router'
import App from './App'
import 'at-ui-style'
import AtUI from 'at-ui'

Vue.use(AtUI)

let app = new Vue({
  router,
  template: '<App/>',
  components: { App }
}).$mount('#app')

export default app

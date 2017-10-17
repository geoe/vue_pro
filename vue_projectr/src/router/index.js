import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Router)
Vue.use(MintUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})

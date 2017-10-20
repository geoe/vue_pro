import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/home'
import Book from '@/components/book'
import MintUI from 'mint-ui'
import Read from '@/components/read'
import 'mint-ui/lib/style.css'

Vue.use(Router)
Vue.use(MintUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/book/:book_id',
      name: 'Book',
      component: Book
    },
    {
      path: '/read',
      name: 'Read',
      component:Read
    }
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import EdRC from './components/EdRC'
import HeaderC from './components/headerC'
import Home from './components/home'
import TpRC from './components/tpRC'
import Pyr from './components/pyr'
import Hot from './components/hot'
import Youhui from './components/youhui'
import Fenqu from './components/fenqu'
import Lately from './components/lately'
import Login from '../myhout/public/vuesrc/login'
Vue.component(EdRC.name,EdRC)
Vue.component(HeaderC.name,HeaderC)
Vue.component(Home.name,Home)
Vue.component(TpRC.name,TpRC)
Vue.component(Pyr.name,Pyr)
Vue.component(Hot.name,Hot)
Vue.component(Youhui.name,Youhui)
Vue.component(Fenqu.name,Fenqu)
Vue.component(Lately.name,Lately)
Vue.component(Login.name,Login)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } 
})

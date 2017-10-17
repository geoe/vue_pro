// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import EdRC from './components/EdRC'
import HeaderC from './components/headerC'
import Home from './components/home'
Vue.component(EdRC.name,EdRC)
Vue.component(HeaderC.name,HeaderC)
Vue.component(Home.name,Home)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } 
})

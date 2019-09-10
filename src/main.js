import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/index.sass' // ovo bi trebalo da importuje sav moj sass kod, jer smo na pocetku kreiranja vue projekta stavili/stiklirali da hocemo css pretprocesor tj scss node-scss

import App from './App.vue'
import router from './router'
import store from './store/index' // hmmm, meni nece ipak da radi bez ovog index, iako je index, mora lepo putanja

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

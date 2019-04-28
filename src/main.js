import Vue from 'vue'

import App from './App.vue'

// import App from './object-reactivity/object-reactivity.vue'
// import App from './object-property/main.vue'

import router from './router'

import store from './store'

Vue.config.productionTip = false

// make it globally available so that it will be more convenient to play with in console.
window.Vue = Vue;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import slidePanelTest from './views/slide-panel-test.vue'
import debounceThrottleTest from './views/debounce-throttle-test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: "/slidepanel",
      component: slidePanelTest
    },
    {
      path: "/dbtt",
      component: debounceThrottleTest
    }
  ]
})

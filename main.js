// main.js

import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import App from './App.vue'

import AddMovie from './components/AddMovie.vue'
import EditMovie from './components/EditMovie.vue'
import ListMovie from './components/ListMovie.vue'
import Movie from './components/Movie.vue'

import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    name: 'Movie',
    path: '/',
    component: Movie
  },
  {
        name: 'Add',
        path: '/add',
        component: AddMovie
  },
  {
      name: 'Edit',
      path: '/edit/:id',
      component: EditMovie
  },
  {
      name: 'List',
      path: '/index',
      component: ListMovie
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddMovie from '@/components/AddMovie'
import EditMovie from '@/components/EditMovie'
import ListMovie from '@/components/ListMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      component: ListMovie
    },
    {
      path: '/edit/:name',
      component: EditMovie
    },
    {
      path: '/add',
      component: AddMovie
    }
  ]
})

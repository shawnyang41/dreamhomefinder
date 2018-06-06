import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'
import Viewpoint from '@/components/Viewplace'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: About
    },
    {
      path: '/search/:nob',
      name: 'Search',
      component: Search
    },
    {
      path: '/viewplace/:id',
      name: 'Viewplace',
      component: Viewpoint
    }
    
  ]
})

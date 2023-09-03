import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SearchCenter from '../views/SearchCenter.vue'
import Direction from '../views/Direction.vue'
import Members from '../views/Members.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/searchCenter',
      name: 'searchCenter',
      component: SearchCenter
    },
    {
      path: '/direction',
      name: 'direction',
      component: Direction
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

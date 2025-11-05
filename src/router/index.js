import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Article from '../views/Article.vue'
import Experience from '../views/Experience.vue'
import Services from '../views/Services.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/article', name: 'Article', component: Article },
  { path: '/services', name: 'Services', component: Services },
  { path: '/experience', name: 'Experience', component: Experience },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // kalau user menekan tombol back/forward
    if (savedPosition) {
      return savedPosition
    } else {
      // selalu scroll ke atas halaman baru
      return { top: 0 }
    }
  },
})

export default router

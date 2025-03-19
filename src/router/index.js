import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import JobListPage from '../pages/Jobs/JobListPage.vue'
import JobDetailPage from '../pages/Jobs/JobDetailPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: LandingPage,
    },
    { path: '/job', component: JobListPage },
    { path: '/job/:jobId', component: JobDetailPage },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
  linkActiveClass: 'active',
})

export default router

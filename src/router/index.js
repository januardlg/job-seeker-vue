import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import JobListPage from '../pages/Jobs/JobListPage.vue'
import JobDetailPage from '../pages/Jobs/JobDetailPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import JobPage from '../pages/Jobs/JobPage.vue'
import AuthPage from '../pages/auth/AuthPage.vue'
import DashboardPage from '../pages/dashboard-profile/DashboardPage.vue'
import ProfileOverviewPage from '../pages/dashboard-profile/ProfileOverviewPage.vue'
import AppliedJobPage from '../pages/dashboard-profile/AppliedJobPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      // name: 'home',
      component: LandingPage,
    },
    // { path: '/job', component: JobListPage },
    // { path: '/job/:jobId', component: JobDetailPage },
    {
      path: '/job',
      name: 'job',
      components: { default: JobPage },
      children: [
        {
          name: 'job-list',
          path: 'list',
          component: JobListPage,
          props: true,
        }, // /teams/t1
        {
          name: 'job-detail',
          path: 'detail/:jobId',
          component: JobDetailPage,
          props: true,
        },
      ],
    },
    {
      name: 'auth',
      path: '/auth',
      component: AuthPage,
      children: [
        {
          name: 'auth-register',
          path: 'register',
          component: RegisterPage,
          props: true,
        },
        {
          name: 'auth-login',
          path: 'login',
          component: LoginPage,
          props: true,
        },
      ],
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: DashboardPage,
      children: [
        {
          name: 'overview',
          path: 'overview',
          component: ProfileOverviewPage,
          props: true,
        },
        {
          name: 'applied-jobs',
          path: 'applied-jobs',
          component: AppliedJobPage,
          props: true,
        },
      ],
    },
  ],
  linkActiveClass: 'active',
})

export default router

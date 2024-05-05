import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PageHome.vue'),
      children: [
        {
          path: '/services/:serviceId',
          name: 'serviceId',
          component: () => import('../views/PageServiceDetails.vue'),
        },
      ],
    },
    {
      path: '/organization',
      name: 'organization',
      component: () => import('../views/PageOrganization.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/PageSettings.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/PageAccount.vue'),
    },
  ],
})

export default router

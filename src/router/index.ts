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
  ],
})

export default router

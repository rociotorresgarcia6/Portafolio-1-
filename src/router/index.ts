import Home from '@/pages/home/Home.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import ContactoPage from '@/pages/contacto/ContactoPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'contacto',
          name: 'contacto',
          component: ContactoPage,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

import MainLayout from '@/layouts/MainLayout.vue'
import AboutPage from '@/pages/about/AboutPage.vue'
import ContactoPage from '@/pages/contacto/ContactoPage.vue'
import Home from '@/pages/home/Home.vue'
import ProjectsPage from '@/pages/projects/ProjectsPage.vue'
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
          path: 'projects',
          name: 'projects',
          component: ProjectsPage,
        },
        {
          path: 'about',
          name: 'about',
          component: AboutPage,
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactoPage,
        },
        {
          path: 'contacto',
          redirect: '/contact',
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

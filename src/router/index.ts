import MainLayout from '@/layouts/MainLayout.vue'
import AboutPage from '@/pages/about/AboutPage.vue'
import ContactoPage from '@/pages/contacto/ContactoPage.vue'
import Home from '@/pages/home/Home.vue'
import BrandingIdentityPage from '@/pages/projects/BrandingIdentityPage.vue'
import ProjectsPage from '@/pages/projects/ProjectsPage.vue'
import TypographyMagazinePage from '@/pages/projects/TypographyMagazinePage.vue'
import PhotographyPage from '@/pages/photography/PhotographyPage.vue'
import PostersPage from '@/pages/posters/PostersPage.vue'
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
          path: 'projects/photography',
          name: 'projects-photography',
          component: PhotographyPage,
        },
        {
          path: 'projects/posters',
          name: 'projects-posters',
          component: PostersPage,
        },
        {
          path: 'projects/branding-identity',
          name: 'projects-branding-identity',
          component: BrandingIdentityPage,
        },
        {
          path: 'projects/typography-magazine',
          name: 'projects-typography-magazine',
          component: TypographyMagazinePage,
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

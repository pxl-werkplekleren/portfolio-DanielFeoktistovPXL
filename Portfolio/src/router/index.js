import { createRouter, createWebHashHistory } from 'vue-router'

import { wplSections } from '../data/portfolio'
import ContactView from '../views/ContactView.vue'
import CvView from '../views/CvView.vue'
import HomeView from '../views/HomeView.vue'
import SectionView from '../views/SectionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/cv',
    name: 'cv',
    component: CvView,
    meta: {
      title: 'CV',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact',
    },
  },
  ...wplSections.map((section) => ({
    path: section.path,
    name: `${section.course}-${section.slug}`,
    component: SectionView,
    meta: {
      title: section.title,
      sectionGroup: section.course,
    },
    props: {
      course: section.course,
      slug: section.slug,
    },
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  document.title = `Daniel Feoktistov | ${to.meta.title ?? 'Portfolio'}`
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MrTabs from '../components/MrTabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/inicio'
  },
  {
    path: '/tabs/',
    component: MrTabs,
    children: [
      {
        path: '',
        redirect: '/tabs/inicio'
      },
      {
        path: 'inicio',
        component: () => import('@/views/MrPageMain.vue')
      },
      {
        path: 'guia',
        component: () => import('@/views/MrGuia.vue')
      },
      {
        path: 'perfil',
        component: () => import('@/views/MrPerfil.vue')
      },
      {
        path: 'img',
        component: () => import('@/views/MrImgPage.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

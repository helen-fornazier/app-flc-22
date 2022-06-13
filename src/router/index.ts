import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MrTabs from '../components/MrTabs.vue'
import MrPageMain from '@/views/MrPageMain.vue'
import MrGuia from '@/views/MrGuia.vue'
import MrPerfil from '@/views/MrPerfil.vue'
import MrImgPage from '@/views/MrImgPage.vue'

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
        component: MrPageMain
      },
      {
        path: 'guia',
        component: MrGuia
      },
      {
        path: 'perfil',
        component: MrPerfil
      },
      {
        path: 'img',
        component: MrImgPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

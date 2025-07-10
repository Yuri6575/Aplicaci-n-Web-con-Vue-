import { createRouter, createWebHistory } from 'vue-router'
import EngordeLayout from '@/components/pages/galpon/EngordeLayout.vue'
import EngordeList from '@/components/pages/galpon/EngordeList.vue'
import EngordeRegister from '@/components/pages/galpon/EngordeRegister.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/engorde',
      name: 'home',
      component: EngordeLayout,
      children: [
        { path: '', component: EngordeList },
        { path: 'register', component: EngordeRegister },
      ],
    },
  ],
})

export default router

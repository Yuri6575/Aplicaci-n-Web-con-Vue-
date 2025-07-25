import { createRouter, createWebHistory } from 'vue-router'
import ReproducerLayout from '@/pages/reproducers/ReproducerLayout.vue'
import ReproducerList from '@/pages/reproducers/ReproducerList.vue'
import ReproducerRegister from '@/pages/reproducers/ReproducerRegister.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/reproducers',
      name: 'home',
      component: ReproducerLayout,
      children: [
        { path: '', component: ReproducerList },
        { path: 'register', component: ReproducerRegister },
      ]
    },
  ],
})

export default router

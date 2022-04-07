import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Todo from '../views/Todo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: () => import('../views/Todo.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../views/Edit.vue')
    },
    {
      path: '/edit/:id?',
      name: 'edit',
      component: () => import('../views/Edit.vue')
    }
    
  ]
})

export default router

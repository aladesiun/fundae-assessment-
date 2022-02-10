import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import signup from '../views/auth/signup.vue'
import signin from '../views/auth/signin.vue'
import expenses from '../views/expenses.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component:signup
  },
  {
    path: '/signin',
    name: 'signin',
    component:signin
  },
  {
    path: '/expenses',
    name: 'expenses',
    component:expenses
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

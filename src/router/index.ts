import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recent',
      name: 'recent',
      component: () => import('../views/RecentView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/contacts/:id',
      name: 'contacts-detail',
      component: () => import('../views/ContactDetailView.vue')
    },
    {
      path: '/contacts/:id/edit',
      name: 'edit-contacts',
      component: () => import('../views/EditContactView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/addContact',
      name: 'addContact',
      component: () => import('../views/AddContactView.vue')
    }
  ]
})

export default router

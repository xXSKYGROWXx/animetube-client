import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router

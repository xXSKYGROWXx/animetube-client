import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	state: () => ({
		isLoggedIn: true
	}),
	actions: {
		logout() {
			state.isLoggedIn = false
		}
	}
})

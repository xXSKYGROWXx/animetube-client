import { defineStore } from 'pinia'
import API from '../services/API.js'

export const useStore = defineStore('store', {
	state: () => ({
		API: new API(),
		isLoggedIn: true
	}),
	actions: {
		logout() {
			state.isLoggedIn = false
		}
	}
})

import { createPinia } from 'pinia'
import { sync } from '@/stores/plugins/sync'

const store = 
	createPinia()
	.use(sync)

export default store

import { createApp } from 'vue'

import router from './router'
import store from './store'

import './css/main.scss'
import App from './App.vue'

createApp(App)
.use(router)
.use(store)
.mount('#root')
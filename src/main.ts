import { createApp } from 'vue'

// import ElementPlus from 'element-plus'
import DataVVue3 from '@kjgl77/datav-vue3'

import router from './router'
import store from './store'

import './css/main.scss'
import App from './App.vue'

createApp(App)
// .use(ElementPlus)
.use(DataVVue3)
.use(router)
.use(store)
.mount('#root')
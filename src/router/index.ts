import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Element from '../views/Element.vue'
import ECharts from '../views/ECharts.vue'
import BigScreen from '../views/BigScreen.vue'
import Three from '../views/Three.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/element',
    component: Element
  },
  {
    path: '/eCharts',
    component: ECharts,
    children: [
    ]
  },
  {
    path: '/bigscreen',
    component: BigScreen,
  },
  {
    path: '/threejs',
    component: Three
  },
  {
    path: '/:pathMatch(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
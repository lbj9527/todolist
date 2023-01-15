import { createRouter, createWebHistory } from 'vue-router'
import start from '../views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: start
  },
  {
    path: '/home',
    name: 'Home',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import('../views/AboutView.vue')
  }
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

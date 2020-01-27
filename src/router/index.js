import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseLayout from '../views/BaseLayout.vue'
import LoginForm from '@/views/sign/LoginForm.vue'
import PermissionComponent from '@/views/PermissionComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'baselayout',
    component: BaseLayout
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/users',
    name: 'users',
    component: PermissionComponent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }else next();

})

export default router


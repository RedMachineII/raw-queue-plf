import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
// import Home from '../views/Home.vue'
import Manageplan from '../views/Manageplan.vue'
import Sequencing from '../views/Sequencing.vue'
import Reportdata from '../views/Reportdata.vue'
import Setting from '../views/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'todo',
    component: App
  },
  {
    path: '/',
    name: 'Home',
    component: Manageplan
  },
  {
    path: '/manageplan',
    name: 'Manageplan',
    component: Manageplan
  },
  {
    path: '/sequencing',
    name: 'Sequencing',
    component: Sequencing
  },
  {
    path: '/reportdata',
    name: 'Reportdata',
    component: Reportdata
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '*',
    component: Manageplan
  },
  { 
    path: '/:fn(.*)', 
    component: Manageplan,
    beforeEnter: (to, from, next) => {
      next({
        name: "Home"
      });
    },
  },
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router

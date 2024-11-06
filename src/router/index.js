import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CombinedView from '@/views/CombinedView.vue';
// Importa los otros componentes en esta sección

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tasklist',
    name: 'TaskList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TaskList.vue')
  }, 
  {
    path: '/addtask',
    name: 'AddTask', // Ruta para añadir tareas
    component: () => import(/* webpackChunkName: "about" */ '../views/AddTask.vue')
    // Implementa la lógica para añadir nuevas tareas.
  },
  {
    path: '/combinedview',
    name: 'CombinedView', // Ruta para añadir tareas
    component: CombinedView // Aquí se debe cargar el componente AddTask
    // Implementa la lógica para añadir nuevas tareas.
  },

  // Las demás rutas deben ir aquí también
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

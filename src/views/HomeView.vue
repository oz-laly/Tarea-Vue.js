<template>
  <div class="home">
   <HelloWorld msg="Bienvenido a la Aplicación de Tareas con Vue"/>
   <p class="subtitulo">Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.</p>
    <img class="logo" alt="Vue logo" src="../assets/logo.png">
    <h1>Secciones de la aplicacion</h1>
    <p><strong>Añadir Tarea:</strong>Permite ingresar nuevas tareas manualmente.</p>
    <p><strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.</p>
    <p><strong>Vista Combinada:</strong>Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>




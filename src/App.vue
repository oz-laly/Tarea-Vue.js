<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/addtask">Agregar Tarea</router-link> |
      <router-link to="/tasklist">Lista de Tarea</router-link> |
      <router-link to= "/combinedview">Vista Combinada</router-link>
    </nav>
    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
}

.logo:hover {
    transform: scale(1.1);
}

.subtitulo {
color: black;
}

nav {
  padding: 30px;
  background-color: palevioletred;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white;
}
</style>

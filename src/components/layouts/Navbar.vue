<template>
    
<nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Inicio</router-link> 
        </li>

        <li class="nav-item">
          <router-link to="/create" class="nav-link">Crear Tarea</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/list" class="nav-link">Listar Tareas</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>


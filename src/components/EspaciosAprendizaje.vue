<!-- EspaciosAprendizaje.vue -->
<template>
  <div class="full-page">
    <div class="container">
      <h1 class="title">ESPACIOS DE APRENDIZAJE</h1>
      <p class="subtitle">Selecciona el espacio de aprendizaje que quieras desarrollar.</p>
      <div class="buttons">
        <router-link to="/matematica">
        <button class="button button-math">MATEMATICA</button>
        </router-link>

        <router-link to="/quimica">
        <button class="button button-chemistry">QUIMICA</button>
      </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'EspaciosAprendizaje',
};
</script>


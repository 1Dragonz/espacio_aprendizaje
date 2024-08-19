<!-- EspaciosAprendizaje.vue -->
<template>
  <div class="full-page">
    <div class="container">
      <h1 class="title">ESPACIOS DE APRENDIZAJE</h1>
      <p class="subtitle">Selecciona el espacio de aprendizaje que quieras desarrollar.</p>
      <div class="buttons">
        <button class="button button-math" @click="selectSpace('matematica')">MATEMATICA</button>
        <button class="button button-chemistry" @click="selectSpace('quimica')">QUIMICA</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EspaciosAprendizaje',
  methods: {
    selectSpace(space) {
      alert(`Has seleccionado el espacio de aprendizaje: ${space}`);
    },
  },
};
</script>


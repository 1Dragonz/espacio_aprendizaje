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

<style scoped>
.full-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* Background gradient */
  background: #C9D6FF; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #E2E2E2, #C9D6FF); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #E2E2E2, #C9D6FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
}

.title {
  color: #ffffff;
  background-color: #2f3e73;
  padding: 10px 0;
  margin: 0 0 20px 0;
  font-size: 24px;
  border-radius: 5px;
}

.subtitle {
  color: #555;
  font-size: 18px;
  margin: 10px 0 20px 0;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.button {
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.1s ease;
}

.button:hover {
  transform: scale(1.05);
}

.button-math {
  background-color: #ff7043;
  color: #ffffff;
}

.button-chemistry {
  background-color: #66bb6a;
  color: #ffffff;
}
</style>

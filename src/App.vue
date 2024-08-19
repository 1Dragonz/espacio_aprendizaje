<!-- App.vue -->
<template>
  <div>
    <EspaciosAprendizaje />
  </div>
</template>

<script>
import EspaciosAprendizaje from './components/EspaciosAprendizaje.vue';

export default {
  name: 'App',
  components: {
    EspaciosAprendizaje,
  },
};
</script>

<style>
@import url(../Styles/styles.css);
</style>

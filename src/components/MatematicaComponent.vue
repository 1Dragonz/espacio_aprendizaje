<template>
    <div class="matematica-container">
      <!-- Encabezado -->
      <header class="header">
        <h1>Matemática</h1>
      </header>
  
      <!-- Contenido Principal -->
      <div class="content">
        <!-- Menú Izquierdo -->
        <aside class="menu">
          <ul>
            <li 
              v-for="(item, index) in menuItems" 
              :key="index" 
              :class="{ active: selectedItem === index }"
              @click="selectItem(index)">
              {{ item.title }}
            </li>
          </ul>
        </aside>
  
        <!-- Contenido Derecho -->
        <main class="main-content">
          <h2>{{ selectedContent.title }}</h2>
          <p>{{ selectedContent.content }}</p>
          <!-- Aquí podrías poner otros elementos relacionados al contenido -->
        </main>
      </div>
  
      <!-- Botón Ejercicio -->
      <div class="exercise-button">
        <button class="exercise">EJERCICIO</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MatematicaComponent',
    data() {
      return {
        selectedItem: 0, // Inicialmente seleccionamos el primer elemento
        menuItems: [
          { title: 'Aritmética', content: 'Contenido de Aritmética...' },
          { title: 'Álgebra', content: 'Contenido de Álgebra...' },
          { title: 'Ecuaciones e Inecuaciones', content: 'Contenido de Ecuaciones e Inecuaciones...' },
          { title: 'Funciones', content: 'Contenido de Funciones...' },
          { title: 'Sucesiones Numéricas', content: 'Contenido de Sucesiones Numéricas...' },
          { title: 'Geometría', content: 'Contenido de Geometría...' },
          { title: 'Trigonometría', content: 'Contenido de Trigonometría...' }
        ]
      };
    },
    computed: {
      selectedContent() {
        return this.menuItems[this.selectedItem];
      }
    },
    methods: {
      selectItem(index) {
        this.selectedItem = index;
      }
    }
  };
  </script>
  
  <style scoped>
  .matematica-container {
    font-family: Arial, sans-serif;
  }
  
  .header {
    background-color: #FF7043;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .content {
    display: flex;
  }
  
  .menu {
    width: 200px;
    background-color: #f4f4f4;
  }
  
  .menu ul {
    list-style-type: none;
    padding: 0;
  }
  
  .menu li {
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .menu li.active {
    color: #FF7043;
    background-color: rgba(255, 112, 67, 0.16);
  }
  
  .main-content {
    flex-grow: 1;
    padding: 20px;
  }
  
  .exercise-button {
    text-align: right;
    padding: 20px;
  }
  
  .exercise {
    background-color: #FF7043;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  
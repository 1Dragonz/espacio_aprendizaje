<!-- MatematicaMenu.vue -->


<template>
    <ul>
      <li 
        v-for="(item, index) in items" 
        :key="index" 
        :class="{ active: isActive(item) }"
        @click="handleClick(item)">
        {{ item.title }}
        <MatematicaMenu v-if="item.children" :items="item.children" @select="handleSelect" />
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'MatematicaMenu',
    props: {
      items: Array
    },
    methods: {
      handleClick(item) {
        this.$emit('select', item);
      },
      handleSelect(item) {
        this.$emit('select', item);
      },
      isActive(item) {
        return this.$parent.selectedItem === item;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el menú */
  ul {
    padding-left: 20px;
  }
  
  li {
    padding: 10px;
    cursor: pointer;
  }
  
  li.active {
    color: #FF7043;
    background-color: rgba(255, 112, 67, 0.16);
  }
  </style>
  
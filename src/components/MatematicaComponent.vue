<template>
  <v-app>
    <v-app-bar app class="app-bar">
      <v-toolbar-title class="white--text">Matematicas</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawer = !drawer">  <!-- Botón para desplegar/ocultar la barra lateral -->
        <v-icon color="white">mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :style="{ backgroundColor: 'rgba(170, 170, 170, 0.15)' }">
      <v-list>
        <v-list-item-group v-model="selectedTopic">
          <v-list-item v-for="(item, index) in items" :key="index" @click="selectTopic(item)"
                       :style="{ backgroundColor: selectedTopic === item ? 'rgba(255, 112, 67, 0.16)' : '' }">
       
            <v-list-item-title :style="{ color: selectedTopic === item ? '#FF7043' : 'inherit' }">
              <v-list-item-icon>
              <v-icon color="">mdi-calculator</v-icon>
            </v-list-item-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <div v-if="selectedTopic">
          <v-tabs v-model="subtopicTab">
            <v-tab
              v-for="(subtopic, index) in selectedTopic.subtopics"
              :key="index"
              @click="currentSubtopic = subtopic"
              :style="{ color: subtopicTab === index ? '#FF7043' : 'inherit' }"
            >
              {{ subtopic.title }}
            </v-tab>
          </v-tabs>
          <v-card v-if="currentSubtopic">
            <v-card-title>{{ currentSubtopic.title }}</v-card-title>
            <v-card-text>
              <p>{{ currentSubtopic.content }}</p>
              <v-img
                :src="currentSubtopic.image"
                v-if="currentSubtopic.image"
                max-width="400"
              ></v-img>
              <div class="video-container">
                <iframe
                  v-if="currentSubtopic.video"
                  :src="currentSubtopic.video"
                  width="100%"
                  height="315"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      subtopicTab: 0,
      items: [
        {
          title: 'Aritmética',
          subtopics: [
            {
              title: 'Números Naturales',
              content: 'Los números naturales son los números positivos enteros que usamos para contar. Incluyen el 1, 2, 3, 4, etc. Son los números básicos en aritmética y tienen propiedades como ser infinitos y tener un sucesor inmediato.',
              video: 'https://www.youtube.com/embed/hd5qnZfGO1c'
            },
            {
        title: 'Números Enteros',
        content: 'Los números enteros incluyen todos los números naturales, sus opuestos negativos, y el cero. Ejemplos incluyen -3, -2, -1, 0, 1, 2, 3. Se utilizan para representar valores positivos y negativos en diversas aplicaciones.',
        video: 'https://www.youtube.com/embed/5HE66809NYI'
      },
      {
        title: 'Números Racionales',
        content: 'Los números racionales son aquellos que pueden expresarse como el cociente de dos enteros, donde el denominador no es cero. Ejemplos son 1/2, -3/4, 7, etc. Pueden ser números fraccionarios o enteros.'
      ,video: 'https://www.youtube.com/embed/ql3lLSwsr98'
      },
      {
        title: 'Números Irracionales',
        content: 'Los números irracionales no pueden ser expresados como el cociente de dos enteros. Ejemplos incluyen √2, π (pi), y e (la base de los logaritmos naturales). Estos números tienen representaciones decimales no repetitivas e infinitas.'
      ,video: 'https://www.youtube.com/embed/1yGBocOCki0'
      },
      {
        title: 'Adición',
        content: 'La adición es el proceso de sumar dos o más números para obtener un total. Por ejemplo, 3 + 4 = 7. Es una de las operaciones básicas en aritmética.'
        ,video: 'https://www.youtube.com/embed/xM-SI9V7Y5o'},
      {
        title: 'Sustracción',
        content: 'La sustracción es el proceso de restar un número de otro para encontrar la diferencia. Por ejemplo, 8 - 5 = 3. Es fundamental para determinar cuánto queda después de retirar una cantidad.'
        ,video: 'https://www.youtube.com/embed/L6NOkLq6kHk'},
      {
        title: 'Multiplicación',
        content: 'La multiplicación es la operación de sumar un número varias veces. Por ejemplo, 4 × 3 = 12, que es equivalente a 4 + 4 + 4. Se usa para encontrar el producto de dos números.'
        ,video: 'https://www.youtube.com/embed/AE4B0hgnz0E' },
      {
        title: 'División',
        content: 'La división es el proceso de repartir un número en partes iguales. Por ejemplo, 12 ÷ 3 = 4. Se utiliza para determinar cuántas veces un número cabe en otro o para repartir cantidades.'
        ,video: 'https://www.youtube.com/embed/mQ4wKV9_pZs' },
      {
        title: 'Potenciación',
        content: 'La potenciación es la operación de elevar un número a una potencia, representado como base^exponente. Por ejemplo, 2^3 = 8. Se usa para encontrar el resultado de multiplicar la base por sí misma un número específico de veces.'
        ,video: 'https://www.youtube.com/embed/a_8MdRema-k'},
      {
        title: 'Radicación',
        content: 'La radicación es el proceso inverso a la potenciación. Por ejemplo, la raíz cuadrada de 9 es 3 porque 3^2 = 9. Se utiliza para encontrar el valor que al elevarse a una potencia específica da como resultado el número dado.'
        ,video: 'https://www.youtube.com/embed/gPV5VqQ3Ajg' },
      {
        title: 'Jerarquía de Operaciones',
        content: 'La jerarquía de operaciones establece el orden en que se deben realizar las operaciones matemáticas para obtener el resultado correcto. El orden es: paréntesis, exponentes, multiplicación y división (de izquierda a derecha), y adición y sustracción (de izquierda a derecha).'
        ,video: 'https://www.youtube.com/embed/XV5PiV2-91U' },
      
      {
        title: 'Divisores y Múltiplos',
        content: 'Un divisor es un número que divide exactamente a otro sin dejar residuo, mientras que un múltiplo es el resultado de multiplicar un número por un entero. Por ejemplo, 2 es divisor de 6 y 6 es múltiplo de 2.'
        ,video: 'https://www.youtube.com/embed/jifqWoTSK6o'},
      {
        title: 'Números Primos',
        content: 'Los números primos son números mayores que 1 que solo tienen dos divisores: 1 y ellos mismos. Ejemplos incluyen 2, 3, 5, 7, etc.'
        ,video: 'https://www.youtube.com/embed/e1XtzmR-4jk'},
      
      {
        title: 'Mínimo Común Múltiplo',
        content: 'El mínimo común múltiplo (MCM) de dos o más números es el menor número que es múltiplo común de todos ellos. Ejemplo: El MCM de 4 y 5 es 20.'
        ,video: 'https://www.youtube.com/embed/txLlA_fyL5g'},
      {
        title: 'Máximo Común Divisor',
        content: 'El máximo común divisor (MCD) es el mayor número que divide exactamente a dos o más números. Ejemplo: El MCD de 12 y 15 es 3.'
        ,video: 'https://www.youtube.com/embed/WD4rGWCRBYY' },
    
          ]
        },
      ],
      selectedTopic: null,
      currentSubtopic: null,
    };
  },
  methods: {
    selectTopic(item) {
      this.selectedTopic = item;
      this.subtopicTab = 0; // Reinicia el tab al seleccionar un nuevo tema
      this.currentSubtopic = item.subtopics[this.subtopicTab]; // Muestra el primer subtema
    },
  },
  watch: {
    subtopicTab(val) {
      if (this.selectedTopic) {
        this.currentSubtopic = this.selectedTopic.subtopics[val];
      }
    },
  },
};
</script>

<style scoped>
.app-bar {
  background-color: #FF7043;
}

.video-container {
  margin-top: 20px;
}

.white--text {
  color: white !important;
}
</style>

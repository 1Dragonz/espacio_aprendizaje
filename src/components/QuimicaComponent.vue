<template>
    <v-app>
      <v-app-bar app class="app-bar">
        <router-link to="/" class="white--text">
        <v-toolbar-title class="white--text">Quimica</v-toolbar-title>
      </router-link>
        <v-spacer></v-spacer>
        <v-btn icon @click="drawer = !drawer">  
          <v-icon color="white">mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" :style="{  }">
        <v-list>
          <v-list-item-group v-model="selectedTopic">
            <v-list-item v-for="(item, index) in items" :key="index" @click="selectTopic(item)"
                         :style="{ backgroundColor: selectedTopic === item ? 'rgba(102, 187, 106, 0.16)' : '' }">
         
              <v-list-item-title :style="{ color: selectedTopic === item ? '#66bb6a' : 'inherit' }">
                <v-list-item-icon>
                <v-icon color="">mdi-atom</v-icon>
              </v-list-item-icon>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
  <a href="https://main--tablaperiodica-quimica.netlify.app/" style="text-decoration: none;">
    <v-row align="center" no-gutters>
      <v-col cols="auto">
        <v-list-item-icon>
          <v-icon color="#66bb6a">mdi-atom</v-icon>
        </v-list-item-icon>
      </v-col>
      <v-col>
        <v-list-item-title :style="{ color: '#66bb6a' }">
          Tabla Periodica
        </v-list-item-title>
      </v-col>
    </v-row>
  </a>
</v-list-item>


          </v-list-item-group>
        </v-list>
        <v-btn class="text-none" prepend-icon="mdi-atom" variant="text" border color="black" >
        Ejercicios
        </v-btn>
    
      </v-navigation-drawer>
      <v-main>
        <v-container>
          <div v-if="selectedTopic">
            <v-tabs v-model="subtopicTab">
              <v-tab
                v-for="(subtopic, index) in selectedTopic.subtopics"
                :key="index"
                @click="currentSubtopic = subtopic"
                :style="{ color: subtopicTab === index ? '#66bb6a' : 'inherit' }"
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
          title: 'Química',
          subtopics: [
            {
              title: 'Introducción a la Química',
              content: 'La química es la ciencia que estudia la composición, estructura y propiedades de la materia, así como los cambios que experimenta durante las reacciones químicas. Es una disciplina fundamental en la ciencia que conecta diversas áreas del conocimiento.',
              video: 'https://www.youtube.com/embed/mbtK9Khf9AU' // Ejemplo de video
            },
            {
              title: 'Ramas de la Química',
              content: 'Las principales ramas de la química incluyen la química orgánica, que estudia compuestos con carbono; la química inorgánica, que estudia compuestos que no contienen carbono; la química física, que estudia los principios físicos que subyacen en las reacciones químicas; la química analítica, que se enfoca en la composición de las sustancias, y la bioquímica, que estudia los procesos químicos en los seres vivos.',
              video: 'https://www.youtube.com/embed/SQ21e6eCtu0' // Ejemplo de video
            },
            {
              title: 'Clasificación de la Química',
              content: 'La química se puede clasificar de varias maneras, incluyendo la química pura, que se enfoca en obtener conocimiento sin buscar aplicaciones prácticas, y la química aplicada, que se centra en el uso del conocimiento químico para resolver problemas específicos. También se puede clasificar según el tipo de materiales o procesos que estudia.',
              video: 'https://www.youtube.com/embed/vPaPmrfgmvo' // Ejemplo de video
            },
            {
              title: 'Fenómenos, Hipótesis y Teorías de la Ciencia',
              content: 'En la ciencia, un fenómeno es cualquier evento observable. Una hipótesis es una explicación provisional que se puede probar mediante experimentos. Las teorías científicas son explicaciones bien fundamentadas de algunos aspectos del mundo natural, basadas en un cuerpo de evidencias repetidamente confirmadas.',
              video: 'https://www.youtube.com/embed/WGyXVlcpM-w' // Ejemplo de video
            },
          ]
        },
        {
          title: 'Materia',
          subtopics: [
            {
              title: 'Características y Manifestaciones de la Materia',
              content: 'La materia es todo lo que tiene masa y ocupa espacio. Se manifiesta en diferentes estados como sólido, líquido, y gaseoso, y posee propiedades físicas y químicas que la definen y diferencian.',
              video: 'https://www.youtube.com/embed/vPaPmrfgmvo' // Ejemplo de video
            },
            {
              title: 'Mezclas Homogéneas y Heterogéneas',
              content: 'Las mezclas son combinaciones de dos o más sustancias. Las mezclas homogéneas tienen una composición uniforme, mientras que las heterogéneas tienen una composición no uniforme y se pueden distinguir sus componentes a simple vista.',
              video: 'https://www.youtube.com/embed/GxVCHRX20_A' // Ejemplo de video
            },
            {
              title: 'Sustancias Puras (Elementos y Compuestos)',
              content: 'Las sustancias puras son materiales con una composición constante y propiedades distintivas. Se dividen en elementos, que no se pueden descomponer en sustancias más simples, y compuestos, que son combinaciones de dos o más elementos.',
              video: 'https://www.youtube.com/embed/8VQtgvyWp08' // Ejemplo de video
            },
            {
              title: 'Propiedades de la Materia (Física, Química, Extensiva e Intensiva)',
              content: 'Las propiedades de la materia se dividen en físicas, que pueden ser observadas sin cambiar la composición de la sustancia, y químicas, que solo se observan durante una reacción química. Además, se clasifican en extensivas, que dependen de la cantidad de materia, e intensivas, que no dependen de la cantidad.',
              video: 'https://www.youtube.com/embed/jIp3NkHC0x0' // Ejemplo de video
            },
            {
              title: 'Cambios Químicos y Físicos',
              content: 'Los cambios físicos alteran el estado o la apariencia de la materia sin cambiar su composición, mientras que los cambios químicos resultan en la formación de una o más sustancias nuevas con composiciones diferentes.',
              video: 'https://www.youtube.com/embed/ZWuJl_kTODI' // Ejemplo de video
            },
          ]
        },
        {
  title: 'Unidades y Estándares de Medida',
  subtopics: [
    {
      title: 'Definición',
      content: 'Las unidades de medida son estándares que se utilizan para expresar la magnitud de una cantidad física. Permiten cuantificar propiedades como la longitud, masa, tiempo, entre otras, de manera uniforme y comprensible.',
      video: 'https://www.youtube.com/embed/qFM68UfeY6o' // Ejemplo de video
    },
    {
      title: 'Clasificación',
      content: 'Las unidades de medida se pueden clasificar en fundamentales, como el metro o el kilogramo, que son independientes, y derivadas, como el metro por segundo, que se forman a partir de las unidades fundamentales.',
    },
    {
      title: 'Sistemas de Medición',
      content: 'Existen diferentes sistemas de medición, como el Sistema Internacional de Unidades (SI), que es el más utilizado en el mundo, y otros sistemas como el sistema imperial, utilizado principalmente en Estados Unidos.',
      video: 'https://www.youtube.com/embed/V_N_mALVOgM' // Ejemplo de video
    },
    {
      title: 'Prefijos Comúnmente Utilizados',
      content: 'Los prefijos se utilizan para indicar múltiplos o submúltiplos de las unidades de medida, como kilo (mil), centi (una centésima), y mili (una milésima). Facilitan la expresión de cantidades muy grandes o muy pequeñas.',
    },
    {
      title: 'Exactitud y Precisión',
      content: 'La exactitud se refiere a qué tan cerca está una medición del valor real, mientras que la precisión se refiere a la consistencia de las mediciones repetidas. Ambas son cruciales en la ciencia para obtener resultados confiables.',
      video: 'https://www.youtube.com/embed/Q3cqxmmNrpI' // Ejemplo de video
    }
  ]
},
{
  title: 'Teoría Atómica',
  subtopics: [
    {
      title: 'El Átomo y sus Componentes',
      content: 'El átomo es la unidad básica de la materia y está compuesto por un núcleo central que contiene protones y neutrones, rodeado por electrones que se mueven en orbitas específicas. Estos componentes determinan las propiedades químicas y físicas de los elementos.',
      video: 'https://www.youtube.com/embed/L4dKhjnj3gw' // Ejemplo de video
    },
    {
      title: 'Configuración Electrónica y Orbitales Atómicos',
      content: 'La configuración electrónica describe la distribución de los electrones en los diferentes orbitales alrededor del núcleo del átomo. Los orbitales atómicos son regiones en el espacio donde es probable encontrar un electrón. La disposición de los electrones afecta la reactividad y propiedades del átomo.',
      video: 'https://www.youtube.com/embed/EgKUO9l3Fzw' // Ejemplo de video
    },
    {
      title: 'Ley Periódica y Tabla Periódica',
      content: 'La Ley Periódica establece que las propiedades de los elementos son funciones periódicas de sus números atómicos. Esto se refleja en la Tabla Periódica, que organiza los elementos en grupos y períodos según sus propiedades similares y sus configuraciones electrónicas.',
      video: 'https://www.youtube.com/embed/MDgxXDIv914' // Ejemplo de video
    },
    {
      title: 'Símbolos Químicos',
      content: 'Los símbolos químicos son abreviaturas de uno o dos letras que representan a los elementos en la Tabla Periódica. Cada símbolo es único y se deriva generalmente del nombre del elemento en latín o inglés.',
      video: 'https://www.youtube.com/embed/jIbnc0j_ihk' // Ejemplo de video
    },
    {
      title: 'Peso Atómico',
      content: 'El peso atómico es la masa promedio de los átomos de un elemento, tomando en cuenta las abundancias relativas de sus isótopos. Es un valor fundamental en química para realizar cálculos estequiométricos y otras aplicaciones.',
      video: 'https://www.youtube.com/embed/UlzyrGUw6dg' // Ejemplo de video
    }
  ]
},

{
  title: 'Compuestos y Enlaces Químicos',
  subtopics: [
    {
      title: 'Tipos de Enlaces (Iónico, Covalente, Metálico)',
      content: 'Los enlaces químicos son las fuerzas que mantienen unidos a los átomos en una molécula o compuesto. Los principales tipos son el enlace iónico, que ocurre entre un metal y un no metal; el enlace covalente, donde los electrones se comparten entre átomos no metálicos; y el enlace metálico, que une a los átomos en metales.',
      video: 'https://www.youtube.com/embed/9Oljha_Syv8' // Ejemplo de video
    },
    {
      title: 'Los Iones y la Regla del Octeto',
      content: 'Los iones son átomos o moléculas que han ganado o perdido electrones, adquiriendo una carga eléctrica. La regla del octeto establece que los átomos tienden a ganar, perder o compartir electrones para tener ocho electrones en su capa de valencia, logrando una configuración estable similar a la de los gases nobles.',
      video: 'https://www.youtube.com/embed/9catv_rhzKc' // Ejemplo de video
    },
    {
      title: 'Distribución de Electrones y Compuestos Moleculares',
      content: 'La distribución de electrones en un compuesto molecular determina su estructura y propiedades. Los electrones se distribuyen en orbitales alrededor del núcleo, y su configuración afecta la formación de enlaces covalentes en los compuestos moleculares.',
      video: 'https://www.youtube.com/embed/zw40HyATMY0' // Ejemplo de video
    },
    {
      title: 'Moléculas y Estructura de Lewis',
      content: 'La estructura de Lewis es una representación gráfica de los electrones de valencia de los átomos en una molécula. Muestra cómo se comparten o transfieren los electrones para formar enlaces químicos, ayudando a visualizar la estructura y geometría de las moléculas.',
      video: 'https://www.youtube.com/embed/cYRlVodmaJU' // Ejemplo de video
    },
    {
      title: 'Nomenclatura Inorgánica',
      content: 'La nomenclatura inorgánica es el sistema utilizado para nombrar compuestos químicos inorgánicos. Existen reglas específicas para nombrar diferentes tipos de compuestos, como óxidos, ácidos, bases, y sales, dependiendo de su composición química.',
      video: 'https://www.youtube.com/embed/ejemplo_video_nomenclatura_inorganica' // Ejemplo de video
    },
    {
      title: 'Clasificación (Binarios y Ternarios)',
      content: 'Los compuestos inorgánicos se clasifican en binarios, que contienen dos elementos, y ternarios, que contienen tres. Esta clasificación ayuda a entender y predecir las propiedades y reactividad de los compuestos.',
      video: 'https://www.youtube.com/embed/0GyJwWcR7eI' // Ejemplo de video
    },
    {
      title: 'Método (Clásico, Estequiométrico y Stock)',
      content: 'Existen diferentes métodos para nombrar compuestos inorgánicos. El método clásico se basa en el uso de prefijos y sufijos, el método estequiométrico utiliza números de oxidación, y el método de Stock usa números romanos para indicar el estado de oxidación de los elementos.',
      video: 'https://www.youtube.com/embed/tgsNSsGikdU' // Ejemplo de video
    }
  ]
},
{
  title: 'Relaciones Cuantitativas en las Reacciones Químicas',
  subtopics: [
    {
      title: 'Número de Avogadro',
      content: 'El Número de Avogadro es una constante fundamental en la química que representa el número de partículas (átomos, moléculas, iones, etc.) en un mol de cualquier sustancia. Este número es aproximadamente 6.022 x 10²³ y se utiliza para convertir entre unidades moleculares y macroscópicas.',
      video: 'https://www.youtube.com/embed/uEVRzNTfoCY' // Ejemplo de video
    },
    {
      title: 'Pesos de Fórmula y Pesos Moleculares',
      content: 'El peso de fórmula es la suma de los pesos atómicos de todos los átomos en la fórmula empírica de un compuesto. El peso molecular, por otro lado, es la suma de los pesos atómicos de todos los átomos en la fórmula molecular de un compuesto. Ambos son fundamentales para realizar cálculos estequiométricos.',
      video: 'https://www.youtube.com/embed/kPQheSnhiQ8' // Ejemplo de video
    },
    {
      title: 'El Mol',
      content: 'El mol es la unidad fundamental en química para medir la cantidad de sustancia. Un mol de cualquier sustancia contiene el mismo número de partículas que el Número de Avogadro, permitiendo una conexión directa entre la escala atómica y las cantidades macroscópicas de material en las reacciones químicas.',
      video: 'https://www.youtube.com/embed/FrfRSiDGVjA' // Ejemplo de video
    }
  ]
}




  
          
        ],
        selectedTopic: null,
        currentSubtopic: null,
      };
    },
    methods: {
      selectTopic(item) {
        this.selectedTopic = item;
        this.subtopicTab = 0; 
        this.currentSubtopic = item.subtopics[this.subtopicTab]; 
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
    background-color: #66bb6a;
  }
  
  .video-container {
    margin-top: 20px;
  }
  
  .white--text {
    color: white !important;
    margin-left: 10px;
  }

  .text-none{
    height: 50px;
    margin-left: 50px;
  }
  </style>
  
  
  
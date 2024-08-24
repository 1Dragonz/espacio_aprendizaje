<template>
  <v-app>
    <v-app-bar app class="app-bar">
      <router-link to="/" class="white--text">
      <v-toolbar-title class="white--text">Matematicas</v-toolbar-title>
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

        {
  title: 'Álgebra',
  subtopics: [
    {
      title: 'Términos Semejantes',
      content: 'Los términos semejantes son aquellos que tienen las mismas variables elevadas a las mismas potencias. Por ejemplo, 3x y 5x son términos semejantes porque ambos tienen la variable "x". La combinación de términos semejantes se realiza sumando o restando los coeficientes y manteniendo la parte literal (variable) igual. Esta operación es esencial para simplificar expresiones algebraicas.'
    ,video: 'https://www.youtube.com/embed/cH_NPAETuvA' },
    {
      title: 'Conceptos de Variables y Constantes',
      content: 'En álgebra, una variable es un símbolo, generalmente una letra, que representa un número desconocido o cualquier valor de un conjunto dado. Por ejemplo, en la ecuación 2x + 3 = 7, "x" es la variable. Una constante, por otro lado, es un valor fijo que no cambia. En la ecuación anterior, "2", "3", y "7" son constantes. Las variables permiten generalizar problemas matemáticos y las constantes fijan valores específicos en las expresiones y ecuaciones.'
      ,video: 'https://www.youtube.com/embed/PqYPspS9vYA' },
    {
      title: 'Clasificación de Expresiones Algebraicas',
      content: 'Las expresiones algebraicas pueden clasificarse en monomios, binomios, trinomios, y polinomios en general, dependiendo del número de términos que contengan. Un monomio es una expresión con un solo término, como 5x. Un binomio tiene dos términos, como 3x + 2. Un trinomio tiene tres términos, como x² + 2x + 1. Los polinomios pueden tener cualquier número de términos. La clasificación ayuda a identificar y aplicar métodos específicos para simplificar y resolver ecuaciones.'
      ,video: 'https://www.youtube.com/embed/_NS3U2nwk0g'},
    {
      title: 'Jerarquía de Operaciones',
      content: 'La jerarquía de operaciones en álgebra sigue el mismo orden que en aritmética: primero se resuelven las operaciones dentro de paréntesis, luego los exponentes, seguidos de multiplicaciones y divisiones (de izquierda a derecha), y finalmente las sumas y restas (de izquierda a derecha). Este orden es crucial para obtener resultados correctos al simplificar y resolver expresiones algebraicas. Por ejemplo, en la expresión 3 + 4 × 2, se debe multiplicar antes de sumar, obteniendo como resultado 11.'
      ,video: 'https://www.youtube.com/embed/0eGHchY5KCs'},
    {
      title: 'Suma',
      content: 'La suma de expresiones algebraicas se realiza combinando términos semejantes. Por ejemplo, al sumar 2x + 3x, se combinan los coeficientes de los términos semejantes para obtener 5x. Esta operación es fundamental para simplificar ecuaciones y polinomios, facilitando su resolución. Al sumar polinomios, es importante alinear los términos semejantes y asegurarse de que las operaciones se realicen correctamente.'
      ,video: 'https://www.youtube.com/embed/UJiUu8-fYgI'},
    {
      title: 'Resta',
      content: 'La resta de expresiones algebraicas se realiza combinando términos semejantes, cambiando el signo de los términos a restar. Por ejemplo, al restar (5x + 3) - (2x + 1), primero se distribuye el signo negativo a los términos del segundo polinomio, resultando en 5x + 3 - 2x - 1, lo que simplifica a 3x + 2. Esta operación es esencial para simplificar expresiones y resolver ecuaciones.'
      ,video: 'https://www.youtube.com/embed/WJD20MQUl6o' },
    {
      title: 'Multiplicación',
      content: 'La multiplicación de expresiones algebraicas implica distribuir cada término de un polinomio por cada término del otro. Por ejemplo, al multiplicar (x + 2)(x + 3), se multiplica x por x y por 3, y luego 2 por x y por 3, resultando en x² + 3x + 2x + 6, que simplifica a x² + 5x + 6. Este proceso es conocido como multiplicación distributiva y es clave para expandir polinomios.'
      ,video: 'https://www.youtube.com/embed/epsasFCsJ9A' },
    {
      title: 'División',
      content: 'La división de expresiones algebraicas se realiza dividiendo cada término del numerador por el denominador. Por ejemplo, en la expresión (6x² + 9x) ÷ 3x, se divide cada término por 3x, resultando en 2x + 3. La división es esencial para simplificar fracciones algebraicas y resolver ecuaciones racionales.'
      ,video: 'https://www.youtube.com/embed/bU9m3PF71Oo' },
    {
      title: 'Binomio al Cuadrado',
      content: 'El binomio al cuadrado se calcula utilizando la fórmula (a + b)² = a² + 2ab + b². Por ejemplo, (x + 4)² se expande como x² + 8x + 16. Esta fórmula es crucial para simplificar expresiones y resolver ecuaciones cuadráticas. Además, la comprensión de esta identidad ayuda en la factorización de polinomios y en la resolución de ecuaciones algebraicas complejas.'
      ,video: 'https://www.youtube.com/embed/' },
    {
      title: 'Binomio al Cubo',
      content: 'El binomio al cubo se calcula utilizando la fórmula (a + b)³ = a³ + 3a²b + 3ab² + b³. Por ejemplo, (x + 2)³ se expande como x³ + 6x² + 12x + 8. Esta expansión es útil en álgebra para simplificar expresiones y resolver problemas que involucran potencias de binomios. Además, es una herramienta importante en la factorización y en la simplificación de ecuaciones más complejas.'
      ,video: 'https://www.youtube.com/embed/6xGq9M1XW0U' },
    {
      title: 'Binomio de Potencia “n”',
      content: 'La expansión de un binomio elevado a la potencia n se realiza mediante el uso del Teorema del Binomio de Newton, que proporciona los coeficientes para cada término de la expansión. Por ejemplo, (a + b)⁴ se expande usando los coeficientes del triángulo de Pascal. Este teorema es fundamental en álgebra avanzada, ya que permite trabajar con polinomios de alto grado de manera más manejable y sistemática.'
      ,video: 'https://www.youtube.com/embed/Hpnj3ZM08IA'},
    {
      title: 'Triángulo de Pascal',
      content: 'El Triángulo de Pascal es una representación triangular de los coeficientes que aparecen en la expansión de un binomio elevado a una potencia. Cada fila del triángulo corresponde a los coeficientes de una potencia de un binomio. Por ejemplo, la tercera fila, 1, 2, 1, corresponde a los coeficientes de (a + b)². Este triángulo es una herramienta útil para encontrar rápidamente los coeficientes necesarios en expansiones binomiales y es ampliamente utilizado en combinatoria y álgebra.'
      ,video: 'https://www.youtube.com/embed/9ri5dwV2K6E'
      
    }
  
  ]
},
{
  title: 'Ecuaciones e Inecuaciones',
  subtopics: [
    {
      title: 'Ecuaciones de Primer Grado con Una Incógnita',
      content: 'Las ecuaciones de primer grado con una incógnita son expresiones algebraicas que se igualan a un valor y contienen una única variable elevada a la primera potencia. La forma general es ax + b = 0, donde "a" y "b" son números reales y "x" es la incógnita. Para resolverlas, se despeja "x", obteniendo x = -b/a. Estas ecuaciones son básicas y fundamentales en álgebra, ya que permiten modelar y resolver problemas cotidianos con una única variable.'
      ,video: 'https://www.youtube.com/embed/IHblqjW8RY8'},
    {
      title: 'Ecuaciones de Primer Grado con Dos Incógnitas',
      content: 'Las ecuaciones de primer grado con dos incógnitas son expresiones que contienen dos variables y se representan en la forma ax + by = c, donde "a", "b", y "c" son constantes y "x" y "y" son incógnitas. Para resolverlas, se suelen utilizar métodos como sustitución, igualación, o eliminación, lo que permite encontrar el valor de ambas incógnitas simultáneamente. Estas ecuaciones son clave en la resolución de sistemas lineales y en la representación gráfica de rectas en el plano cartesiano.'
      ,video: 'https://www.youtube.com/embed/BcV_WLCbFBU'},
    {
      title: 'Sistemas de Ecuaciones Lineales',
      content: 'Un sistema de ecuaciones lineales es un conjunto de dos o más ecuaciones lineales con las mismas variables. La solución del sistema es el punto o conjunto de puntos que satisfacen todas las ecuaciones simultáneamente. Los métodos comunes para resolver sistemas de ecuaciones incluyen la sustitución, eliminación y el uso de matrices (método de Cramer). Estos sistemas son fundamentales en matemáticas aplicadas, permitiendo modelar y resolver problemas complejos en diversas áreas como la ingeniería, economía, y física.'
      ,video: 'https://www.youtube.com/embed/L0QuX9RpEoM'},
    {
      title: 'Inecuaciones',
      content: 'Las inecuaciones son desigualdades que relacionan expresiones algebraicas. A diferencia de las ecuaciones, las inecuaciones indican que una expresión es mayor o menor que otra, utilizando los signos >, <, ≥, o ≤. Resolver una inecuación implica encontrar el conjunto de valores de la variable que satisfacen la desigualdad. Las inecuaciones son esenciales en la modelación de problemas donde las restricciones o límites son importantes, como en programación lineal y análisis de optimización.'
      ,video: 'https://www.youtube.com/embed/gMDAtLLW5lM'},
    {
      title: 'Ecuaciones Cuadráticas',
      content: 'Las ecuaciones cuadráticas son aquellas que tienen la forma ax² + bx + c = 0, donde "a", "b", y "c" son constantes y "x" es la incógnita. Para resolverlas, se pueden utilizar métodos como la factorización, el uso de la fórmula general (x = [-b ± √(b²-4ac)] / 2a), o completando el cuadrado. Estas ecuaciones tienen dos soluciones posibles, que pueden ser reales o complejas, y son fundamentales en la resolución de problemas que involucran áreas, trayectorias, y otros conceptos geométricos.'
      ,video: 'https://www.youtube.com/embed/a9bmHwbuZc0'},
    {
      title: 'Sistema de Ecuaciones Cuadráticas',
      content: 'Un sistema de ecuaciones cuadráticas es un conjunto de dos o más ecuaciones en las que al menos una es de segundo grado. Resolver este tipo de sistemas puede implicar métodos como sustitución, eliminación, o el uso de métodos numéricos. Estos sistemas suelen tener múltiples soluciones, que pueden ser puntos de intersección entre curvas cuadráticas y lineales o entre dos curvas cuadráticas en el plano cartesiano. Son utilizados en problemas de optimización y modelación en física y economía.'
      ,video: 'https://www.youtube.com/embed/wWE8jtcXQ3I' },
    {
      title: 'Ecuaciones e Inecuaciones Exponenciales',
      content: 'Las ecuaciones exponenciales son aquellas en las que la variable aparece en el exponente, como en a^x = b. Resolver estas ecuaciones suele implicar el uso de logaritmos para despejar la variable. Las inecuaciones exponenciales, en cambio, establecen desigualdades con bases exponenciales. Estos tipos de ecuaciones e inecuaciones son fundamentales en el estudio del crecimiento exponencial, la desintegración radiactiva, y otros fenómenos naturales y económicos donde las tasas de cambio son proporcionales al valor actual.'
      ,video: 'https://www.youtube.com/embed/kNE9JMChsbc'},
    {
      title: 'Ecuaciones e Inecuaciones Logarítmicas',
      content: 'Las ecuaciones logarítmicas son aquellas que contienen logaritmos de la forma log_a(x) = b. Para resolverlas, se aplican propiedades de los logaritmos para despejar la variable, convirtiéndolas en ecuaciones exponenciales. Las inecuaciones logarítmicas, en cambio, son desigualdades que involucran logaritmos. Estos tipos de ecuaciones e inecuaciones son cruciales en situaciones donde se necesita modelar fenómenos que siguen patrones multiplicativos o para resolver problemas de escalas logarítmicas, como el pH en química o la magnitud sísmica.'
      ,video: 'https://www.youtube.com/embed/VR3vTjfcGhQ'}
  ]
},
{
  title: 'Funciones',
  subtopics: [
    {
      title: 'Concepto de Función',
      content: 'Una función es una relación matemática entre dos conjuntos, donde a cada elemento del primer conjunto (dominio) le corresponde un único elemento del segundo conjunto (codominio). Se denota comúnmente como f(x), donde "x" es la variable independiente. Las funciones son fundamentales en matemáticas, ya que permiten modelar relaciones entre variables y son la base para muchas áreas de estudio, incluyendo el cálculo, la física, y la economía.'
      ,video: 'https://www.youtube.com/embed/Ll7xfe3HoZE' },
    {
      title: 'Dominio y Rango de una Función',
      content: 'El dominio de una función es el conjunto de todos los valores posibles de la variable independiente "x" para los cuales la función está definida. El rango, por otro lado, es el conjunto de todos los valores posibles de la variable dependiente "f(x)". Determinar el dominio y el rango de una función es esencial para entender su comportamiento y es un paso crucial en el análisis de funciones.'
      ,video: 'https://www.youtube.com/embed/H40lcwlgPMk'},
    {
      title: 'Funciones Lineales',
      content: 'Las funciones lineales son aquellas que se representan en la forma f(x) = mx + b, donde "m" es la pendiente y "b" es la intersección con el eje y. Estas funciones se grafican como líneas rectas en el plano cartesiano y son fundamentales en la modelación de relaciones directas entre variables. La pendiente "m" indica la tasa de cambio de la función, mientras que "b" indica el valor de la función cuando x = 0.'
      ,video: 'https://www.youtube.com/embed/AoZpzAoC1Qg'},
    {
      title: 'Funciones Cuadráticas',
      content: 'Las funciones cuadráticas tienen la forma f(x) = ax² + bx + c, donde "a", "b", y "c" son constantes. Estas funciones se grafican como parábolas en el plano cartesiano. La concavidad de la parábola (abierta hacia arriba o hacia abajo) depende del signo de "a". Las funciones cuadráticas son utilizadas en una variedad de aplicaciones, desde la física (trayectorias de proyectiles) hasta la economía (modelación de costos y beneficios).'
      ,video: 'https://www.youtube.com/embed/gnAdna_tLK0'},
    {
      title: 'Funciones Exponenciales',
      content: 'Las funciones exponenciales se expresan en la forma f(x) = a^x, donde "a" es una constante positiva y "x" es la variable. Estas funciones son fundamentales en el modelado de fenómenos que implican crecimiento o decaimiento rápido, como el crecimiento poblacional, la desintegración radiactiva, y la acumulación de intereses. Su característica principal es que el valor de la función crece (o decrece) de manera proporcional a su valor actual.'
      ,video: 'https://www.youtube.com/embed/IhsZKreUPE0'},
    {
      title: 'Funciones Logarítmicas',
      content: 'Las funciones logarítmicas son la inversa de las funciones exponenciales y se representan como f(x) = log_a(x), donde "a" es la base del logaritmo. Estas funciones son fundamentales en situaciones donde se desea revertir el crecimiento exponencial o entender relaciones multiplicativas en una escala más manejable. Se utilizan en diversas aplicaciones como la medición de la intensidad sonora (decibeles), la escala de pH en química, y la escala de Richter en sismología.'
      ,video: 'https://www.youtube.com/embed/C0vUje9Uduc'},
    {
      title: 'Funciones Trigonométricas',
      content: 'Las funciones trigonométricas, como el seno, coseno y tangente, relacionan los ángulos de un triángulo rectángulo con las longitudes de sus lados. Se utilizan extensamente en geometría, física, ingeniería, y muchas otras áreas para modelar fenómenos periódicos y oscilatorios. Estas funciones son fundamentales para entender las propiedades de las ondas, la rotación y las vibraciones, y son clave en el estudio del análisis armónico y la transformada de Fourier.'
      ,video: 'https://www.youtube.com/embed/8zVW0U2jn8U' },
  
    {
      title: 'Funciones Inversas',
      content: 'Una función inversa es aquella que "deshace" la acción de la función original. Si f(x) es una función, su inversa, denotada como f⁻¹(x), es tal que f(f⁻¹(x)) = x y f⁻¹(f(x)) = x. Las funciones inversas son importantes en la resolución de ecuaciones y en la comprensión de simetrías en matemáticas. En términos gráficos, la función inversa es una reflexión de la función original sobre la línea y = x.'
      ,video: 'https://www.youtube.com/embed/9zXjR45lOUo' }
  ]
},{
  title: 'Sucesiones Numéricas',
  subtopics: [
    {
      title: 'Definición de Sucesión',
      content: 'Una sucesión es una secuencia ordenada de números en la cual cada número tiene una posición específica, denominada "término". Las sucesiones se suelen denotar como {a₁, a₂, a₃, ...}, donde a₁ es el primer término, a₂ el segundo, y así sucesivamente. Cada término de una sucesión puede estar definido explícitamente por una fórmula o de manera recursiva, y son fundamentales para el estudio de series, límites y convergencia en matemáticas.'
      },
    {
      title: 'Progresiones Aritméticas',
      content: 'Una progresión aritmética es una sucesión de números en la que la diferencia entre términos consecutivos es constante. Esta diferencia se llama "razón aritmética". La fórmula general para el término n-ésimo de una progresión aritmética es aₙ = a₁ + (n-1)d, donde "d" es la razón y a₁ es el primer término. Estas sucesiones se utilizan en diversas aplicaciones, incluyendo la planificación financiera, la física, y la estadística.'
      ,video: 'https://www.youtube.com/embed/VvOoYZj_OiE' },
    {
      title: 'Progresiones Geométricas',
      content: 'Una progresión geométrica es una sucesión en la que cada término se obtiene multiplicando el término anterior por una constante, llamada "razón geométrica". La fórmula para el término n-ésimo de una progresión geométrica es aₙ = a₁ * rⁿ⁻¹, donde "r" es la razón y a₁ es el primer término. Estas sucesiones son importantes en el estudio del crecimiento exponencial, la economía, y los modelos de desintegración radiactiva.'
      ,video: 'https://www.youtube.com/embed/U-hhp4x4JcE' },
    {
      title: 'Sucesiones Recursivas',
      content: 'Las sucesiones recursivas son aquellas en las que cada término se define en función de los términos anteriores. Un ejemplo clásico es la sucesión de Fibonacci, donde cada término es la suma de los dos términos anteriores: Fₙ = Fₙ₋₁ + Fₙ₋₂, con F₁ = F₂ = 1. Las sucesiones recursivas son fundamentales en la teoría de números, combinatoria, y en la resolución de problemas complejos que requieren la descomposición en pasos más simples.'
      ,video: 'https://www.youtube.com/embed/n1md9o5yKLw'},
    {
      title: 'Convergencia de Sucesiones',
      content: 'Una sucesión converge si los términos de la sucesión se acercan a un valor específico (límite) a medida que el número de términos aumenta. Formalmente, una sucesión {aₙ} converge a L si, para cualquier ε > 0, existe un número N tal que para todos los n > N, |aₙ - L| < ε. La convergencia de sucesiones es una noción clave en el análisis matemático y es esencial para el estudio de series infinitas, límites y continuidad.'
        },    {
      title: 'Sucesiones Divergentes',
      content: 'Una sucesión es divergente si no converge a ningún límite finito. Esto significa que los términos de la sucesión pueden crecer sin límite, oscilar entre valores sin tender a un único valor, o comportarse de manera caótica. Las sucesiones divergentes son importantes en el estudio del comportamiento asintótico de funciones y en la identificación de patrones que no se estabilizan en un valor particular.'
      ,video: 'https://www.youtube.com/embed/RPdGE-RHlLI'  },
    {
      title: 'Series Numéricas',
      content: 'Una serie es la suma de los términos de una sucesión. Las series pueden ser finitas o infinitas. Un ejemplo de serie infinita es la serie geométrica, que tiene la forma S = a₁ + a₁r + a₁r² + ... Las series son fundamentales en el análisis matemático, especialmente en la resolución de ecuaciones diferenciales, el análisis de Fourier, y en diversas aplicaciones en física, economía, y otras ciencias. La convergencia de una serie es una condición esencial para que la suma infinita tenga un valor finito.'
      ,video: 'https://www.youtube.com/embed/xRlVWEzdhaM'  }
  ]
},{
  title: 'Geometría',
  subtopics: [
    {
      title: 'Puntos, Rectas y Planos',
      content: 'En geometría, los puntos son objetos básicos sin dimensiones, usados para representar una posición en el espacio. Las rectas son conjuntos infinitos de puntos en una única dimensión que se extienden sin fin en ambas direcciones. Los planos son superficies bidimensionales infinitas que contienen un número infinito de rectas y puntos. Estos conceptos forman la base de la geometría y son fundamentales para entender las relaciones espaciales.'
      ,video: 'https://www.youtube.com/embed/LIrHcJAmplo'},
    {
      title: 'Ángulos',
      content: 'Un ángulo es la figura formada por dos rayos, llamados lados del ángulo, que comparten un punto común llamado vértice. Los ángulos se miden en grados (°) o radianes (rad). Los tipos de ángulos incluyen ángulos agudos (menos de 90°), rectos (90°), obtusos (más de 90° y menos de 180°), y llanos (180°). Los ángulos son fundamentales en el estudio de la geometría, la trigonometría, y el análisis de formas y figuras.'
      ,video: 'https://www.youtube.com/embed/4KTKDMRZufE' },
    {
      title: 'Triángulos',
      content: 'Un triángulo es un polígono de tres lados y tres ángulos. Los triángulos se clasifican según sus lados en equiláteros (tres lados iguales), isósceles (dos lados iguales), y escalenos (todos los lados diferentes), y según sus ángulos en acutángulos (todos los ángulos agudos), rectángulos (un ángulo recto), y obtusángulos (un ángulo obtuso). Los triángulos son esenciales para el estudio de la geometría, la trigonometría, y la geometría analítica.'
      ,video: 'https://www.youtube.com/embed/I9S1kBXLkBo' },
    {
      title: 'Cuadriláteros',
      content: 'Los cuadriláteros son polígonos de cuatro lados. Los tipos más comunes incluyen el cuadrado (cuatro lados y ángulos iguales), el rectángulo (ángulos rectos y lados opuestos iguales), el rombo (cuatro lados iguales pero no necesariamente con ángulos rectos), y el trapecio (al menos un par de lados paralelos). El estudio de los cuadriláteros es fundamental en la geometría y se aplica en la ingeniería, la arquitectura, y el diseño.'
      ,video: 'https://www.youtube.com/embed/GBl62iBnQzg'},
    {
      title: 'Polígonos',
      content: 'Un polígono es una figura plana cerrada compuesta por un número finito de segmentos de línea que se llaman lados. Los polígonos se clasifican según el número de lados: triángulos (3), cuadriláteros (4), pentágonos (5), hexágonos (6), etc. También pueden ser regulares (todos los lados y ángulos iguales) o irregulares. Los polígonos son fundamentales en el estudio de las áreas, perímetros, y otros conceptos geométricos avanzados.'
      ,video: 'https://www.youtube.com/embed/suHvhrijfA' },
    {
      title: 'Circunferencia y Círculo',
      content: 'Una circunferencia es la curva cerrada formada por todos los puntos que están a una distancia constante, llamada radio, de un punto central. Un círculo es la región del plano limitada por una circunferencia. El estudio de las propiedades de la circunferencia y el círculo, como el diámetro, el radio, la longitud de la circunferencia y el área del círculo, es fundamental en la geometría, la trigonometría, y la física.'
      ,video: 'https://www.youtube.com/embed/xt0HXtr8C0c' },
    {
      title: 'Área y Perímetro',
      content: 'El área es la medida de la superficie de una figura plana, mientras que el perímetro es la longitud total del contorno de una figura. Las fórmulas para calcular el área y el perímetro varían según la figura geométrica: por ejemplo, el área de un rectángulo es el producto de su longitud y anchura, mientras que el perímetro es la suma de todos sus lados. Estos conceptos son esenciales en la geometría, la arquitectura, y muchas aplicaciones prácticas.'
      ,video: 'https://www.youtube.com/embed/wYNvY_bOGdc' },
    {
      title: 'Volumen y Superficie',
      content: 'El volumen es la cantidad de espacio que ocupa un objeto tridimensional, mientras que el área de superficie es la suma de todas las áreas de las superficies exteriores de una figura tridimensional. Las fórmulas para calcular el volumen y la superficie varían según el sólido geométrico: por ejemplo, el volumen de un cubo es el cubo de la longitud de su lado, mientras que su superficie es la suma de las áreas de sus seis caras. Estos conceptos son cruciales en la geometría, la ingeniería, y las ciencias físicas.'
      ,video: 'https://www.youtube.com/embed/1IO8oZkrkXI' },
    {
      title: 'Teorema de Pitágoras',
      content: 'El Teorema de Pitágoras establece que en un triángulo rectángulo, el cuadrado de la longitud de la hipotenusa (el lado opuesto al ángulo recto) es igual a la suma de los cuadrados de las longitudes de los otros dos lados. Matemáticamente, se expresa como c² = a² + b². Este teorema es uno de los pilares de la geometría y tiene innumerables aplicaciones en matemáticas, física, y la vida cotidiana.'
      ,video: 'https://www.youtube.com/embed/eTEBvBIz8Ok' }
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
  background-color: #FF7043;
}

.video-container {
  margin-top: 20px;
}

.white--text {
  color: white !important;
  margin-left: 10px;
}
</style>



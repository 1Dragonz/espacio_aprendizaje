import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'



import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})




//componentes
import EspaciosAprendizaje from './components/EspaciosAprendizaje.vue'
import MatematicaComponent from './components/MatematicaComponent.vue'
import QuimicaComponent from './components/QuimicaComponent.vue'
//definir objetos rutas -- Configuracion
const routes =[
{
    path:'/', component: EspaciosAprendizaje,
},
{  
    path:'/matematica',component: MatematicaComponent,
},
{
    path: '/quimica', component: QuimicaComponent,
}
]

// crer objeto rutas de vue router --- objetos VR

const router = createRouter({
    history: createWebHistory(),
    routes,
})


//instancia de vue
const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//componentes
import EspaciosAprendizaje from './components/EspaciosAprendizaje.vue'
import MatematicaComponent from './components/MatematicaComponent.vue'
//definir objetos rutas -- Configuracion
const routes =[
{
    path:'/', component: EspaciosAprendizaje,
},
{  
    path:'/matematica',component: MatematicaComponent,
},
]

// crer objeto rutas de vue router --- objetos VR

const router = createRouter({
    history: createWebHistory(),
    routes,
})


//instancia de vue
const app = createApp(App)

app.use(router)

app.mount('#app')

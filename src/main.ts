import { createApp } from 'vue'
import { createRouter, createWebHistory, Router} from "vue-router"
import './style.css'
import App from './App.vue'

import Homepage from "./pages/Homepage.vue"
import Menu from "./pages/Menu.vue"
import Storico from "./pages/Storico.vue"
import Prenota from "./pages/Prenota.vue"

const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Homepage
        },
        {
            path: "/menu",
            component: Menu
        },
        {
            path: "/storico",
            component: Storico
        },
        {
            path: "/prenota",
            component: Prenota
        },
    ]
})

createApp(App)
    .use(router)
    .mount('#app')

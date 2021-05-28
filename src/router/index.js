import { createRouter, createWebHistory } from 'vue-router'
import AppContainer from "../components/base/AppContainer.vue"
import Home from './home/index'
import About from "./about/index"
//import Contato from "../views/Contato.vue"

const routes = [{
        path: '/',
        name: 'Main',
        component: AppContainer,
        children: [
            Home,
            About
        ]
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
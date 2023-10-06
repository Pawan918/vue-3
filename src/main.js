import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Logout from './components/Logout.vue'
import store from './store/store'

import { createRouter,createWebHistory } from 'vue-router';
const routes = [
    {
        path : '/',
        component : Home
    },
    {
        path : '/login/:name',
        component : Login
    },
    {
        path : '/logout',
        component : Logout
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})

createApp(App).use(router).use(store).mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'
import Home from './components/Home.vue'
import { createRouter,createWebHistory } from 'vue-router';
const routes = [
    {
        path : '/test',
        component : Test 
    },
    {
        path : '/',
        component : Home
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')

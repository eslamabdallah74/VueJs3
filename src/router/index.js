import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import Games from '../views/games/Games.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/games',
        name: 'Games',
        component: Games
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 
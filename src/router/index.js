import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue';
import Games from '../views/games/Games.vue';
import Game from '../views/games/Game.vue';

// 404
import NotFound from '../views/NotFound.vue';

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
    },
    {
        path: '/game/:id',
        name: 'Game',
        component: Game,
        props: true
    },
    // 404
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
        meta: {
            requiresAuth: false
          }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router 
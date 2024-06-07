import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            // component: App,
            children: [
                {
                    path: '/',
                    name: 'main',
                    component: () => import('@/pages/Main.vue')
                },
                {
                    path: '/community',
                    name: 'community',
                    component: () => import('@/pages/Community.vue')
                }
            ]
        },
    ]
});

export default router;

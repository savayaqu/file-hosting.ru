import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorizationView from "@/views/AuthorizationView.vue";
import LogoutView from "@/views/LogoutView.vue";
import FilesView from "@/views/FilesView.vue";
const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/registration',
            name: 'registration',
            component: () => import('../views/RegistrationView.vue')
        },
        {
            path: '/authorization',
            name: 'authorization',
            component: AuthorizationView
        },
        {
            path: '/logout',
            name: 'logout',
            component: LogoutView
        },
        {
            path: '/files',
            name: 'files',
            component: FilesView
        },
    ]
})
export default router

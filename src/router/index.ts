import { createWebHistory, createRouter } from 'vue-router'
import * as LoginUtils from '@/utils/LoginUtils'

import Main from '@/views/Main.vue'
import Login from '@/views/Login/Login.vue'
import Sales from '@/views/Sales/Sales.vue'
import Products from '@/views/Products/Products.vue'
import Settings from '@/views/Settings/Settings.vue'

const basePath = import.meta.env.VITE_BASE_PATH
const routes = [
    {
        path: `${basePath}`,
        name: 'main',
        redirect: `${basePath}/sales`,
        component: Main,
        children: [
            {
                path: `${basePath}/sales`,
                name: 'sales',
                component: Sales,
                meta: { title: 'Entregas' },
            },
            {
                path: `${basePath}/products`,
                name: 'products',
                component: Products,
                meta: { title: 'Medicamentos' },
            },
            {
                path: `${basePath}/settings`,
                name: 'settings',
                component: Settings,
                meta: { title: 'Configurações' },
            },
        ],
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: `${basePath}/login`,
        name: 'login',
        component: Login,
        meta: {
            title: 'Login',
            requiresAuth: false,
            metaTags: [
                {
                    name: 'X-UA-Compatible',
                    content: 'ie=edge',
                },
                {
                    property: 'viewport',
                    content: 'width=1024',
                },
            ],
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

router.beforeEach((to, _from, next) => {
    if (to.meta.title) {
        const title = <string>to.meta.title
        document.title = title
    } else {
        document.title = 'Farmacia TechHub'
    }
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!LoginUtils.isLoggedIn()) {
            next({ name: 'login' })
        } else {
            next()
        }
    } else {
        if (!LoginUtils.isLoggedIn()) {
            next()
        } else {
            next({ name: 'main' })
        }
    }
})

export default router

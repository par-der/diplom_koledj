import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: () => import('../views/main/Index.vue')
        },
        {
            path: '/products',
            name: 'products.index',
            component: () => import('../views/product/Index.vue')
        },
        {
            path: '/products/:id',
            name: 'products.show',
            component: () => import('../views/product/Show.vue')
        },
        {
            path: '/cart',
            name: 'carts',
            component: () => import('../views/cart/Index.vue')
        },
    ]
})

export default router

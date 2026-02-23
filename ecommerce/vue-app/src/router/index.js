import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AddProductView from '../views/AddProductView.vue'
import ProductView from '../views/ProductView.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/add-product', name: 'add-product', component: AddProductView},
    {path: '/product/:id', name: 'product', component: ProductView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
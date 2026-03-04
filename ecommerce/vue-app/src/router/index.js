import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AddProductView from '../views/AddProductView.vue'
import ProductView from '../views/ProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import UserView from '../views/UserView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/add-product', name: 'add-product', component: AddProductView},
    {path: '/product/:id', name: 'product', component: ProductView},
    {path: '/edit-product/:id', name: 'edit-product', component: EditProductView},
    {path: '/user', name: 'user', component: UserView},
    {path: '/login', name: 'login', component: LoginView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
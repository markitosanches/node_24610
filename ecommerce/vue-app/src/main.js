import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'
// import { useAuthStore } from './stores/auth'

createApp(App).use(createPinia()).use(router).mount('#app')

// const authStore = useAuthStore()

// const token = localStorage.getItem('token')
// if(token){
//   authStore.setUser({ token })
// }
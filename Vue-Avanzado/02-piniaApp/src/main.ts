import './assets/main.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
app.use(router)
VueQueryPlugin.install(app, {
  queryCLientConfig: { defaultOptions: { queries: { cacheTime: 1000 * 60 } } }
})
app.mount('#app')

import './assets/main.css'

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import LenisVue from 'lenis/vue'

const app = createApp(App)
app.use(LenisVue)
app.use(router)

app.mount('#app')

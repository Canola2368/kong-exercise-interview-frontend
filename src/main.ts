import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/scss/_reset.scss'
import './assets/scss/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

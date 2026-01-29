import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <--- (1) Phải import router !!!

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)

app.use(router) // <--- (2) Phải có dòng này !!!
app.mount('#app')
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import './assets/main.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';


const app = createApp(App)

app.use(createPinia())
app.use(router)
// // @ts-ignore
// app.use(BootstrapVue);
// // @ts-ignore
// app.use(IconsPlugin)

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import './assets/main.css'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import { VueCookieNext } from 'vue-cookie-next'

const app = createApp(App)
app.use(VueCookieNext)
app.use(createPinia())
app.use(router)
VueCookieNext.config({ expire: '1d' , sameSite: ""})

app.mount('#app')

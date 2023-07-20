import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Quasar, Dialog, Loading } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'


createApp(App)
    .use(Quasar, {
        plugins: {
            Dialog,
            Loading
        }
    })
    .mount('#app')

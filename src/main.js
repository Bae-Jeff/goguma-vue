import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router';
import "primeflex/primeflex.css";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
const app = createApp(App)
app.use(router);
app.use(createPinia())
app.use(PrimeVue)
app.mount('#app')

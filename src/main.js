import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { nextTick } from 'vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

nextTick(() => {
    AOS.init();
});

import 'bootstrap/dist/js/bootstrap.js';
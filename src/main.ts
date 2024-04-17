import { createApp } from 'vue'

import App from './App.vue'

import './index.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'line-awesome/dist/font-awesome-line-awesome/css/all.css'
import 'line-awesome/dist/line-awesome/css/line-awesome.css'

import './assets/css/style.css'

import router from './router'

import { vMaska } from "maska"

createApp(App).use(router).directive('maska', vMaska).mount('#app')

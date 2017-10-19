import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'
import router from './router'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
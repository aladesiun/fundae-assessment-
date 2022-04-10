import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const mixin = {
    created(){
        console.log("hello from global mixins");
    }
}
createApp(App).use(store).use(router).mount('#app').use(mixin)

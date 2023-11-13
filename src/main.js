import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const listOfNoneProperties = {};
// for (var props in window) {
//     if(!window.hasOwnProperty(props)){
//         if(typeof window[props] === 'function'){
//             listOfNoneProperties[props] = window[props];
//
//         }else{
//             listOfNoneProperties[props] = window[props];
//         }
//     }
// }

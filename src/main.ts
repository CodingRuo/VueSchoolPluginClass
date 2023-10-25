import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createToolTipPlugin } from './toolTipPlugin'

createApp(App).use(createToolTipPlugin({
    arrow: true,
    placement: "top"
})).mount('#app')

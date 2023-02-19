import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret, faMobileScreen, faEnvelope);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

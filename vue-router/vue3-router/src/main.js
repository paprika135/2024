import { createApp } from 'vue'
import RouterLink from './components/RouterLink.vue'
import RouterView from './components/RouterView.vue'
import App from './App.vue'

const app = createApp(App)
app.component('RouterLink',RouterLink);
app.component('RouterView',RouterView);
app.mount('#app')

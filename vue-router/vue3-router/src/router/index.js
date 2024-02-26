import About from '../views/About.vue'
import Home from '../views/Home.vue'
import {ref} from 'vue';

const dynamicPath = ref(window.location.pathname);

const router = {
    routes:[{path:'/',component:Home},{path:'/about',component:About}]
}



export default router

export {
    dynamicPath
}
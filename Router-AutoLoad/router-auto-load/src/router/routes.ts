import { RouteRecordRaw } from 'vue-router';
import getRoutes from './autoload';


const routes:RouteRecordRaw[] = [{
    path:'/',
    name:'home',
    component:()=>import('../components/Home.vue'),
    children:getRoutes()
}]

export default routes;
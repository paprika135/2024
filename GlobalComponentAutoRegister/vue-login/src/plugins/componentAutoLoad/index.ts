import { App } from "vue";

const components = import.meta.glob('../../components/*vue',{eager:true}) as Record<string,{default:any}>


export default function componentAutoLoad(app:App) {
    Object.keys(components).forEach(c=>{
        // console.log(c);
        // console.log(c.split('/').slice(-1)[0].split('.')[0]);
        const name = c.split('/').slice(-1)[0].split('.')[0]
        // console.log(name);
        // console.log(components[c].default);
        app.component(name,components[c].default);
    })
}
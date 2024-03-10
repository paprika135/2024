import { RouteRecordRaw } from "vue-router";

const layouts  = import.meta.glob('../layouts/*.vue',{eager:true});
const views = import.meta.glob('../views/*/*.vue',{eager:true});



//生成routes数组
function getRoutes() {
    const layoutsRoutes:RouteRecordRaw[] = [];
    Object.entries(layouts).forEach(([file,module])=>{
        const route = getRouteByModule(file,module as {[key:string]:any});
        route.children = getChildrenRoute(route)!;
        layoutsRoutes.push(route);
    })
    return layoutsRoutes;
}

//提取子路由
function getChildrenRoute(layoutRoute:RouteRecordRaw) {
    const childrenRoutes:RouteRecordRaw[] = [];
    Object.entries(views).forEach(([file,module])=>{
        if(file.includes(`${String(layoutRoute.name)}`)){
            const childrenRoute = getRouteByModule(file,module as {[key:string]:any});
            childrenRoutes.push(childrenRoute)
        }
    })
    return childrenRoutes;
}

//生成路由对象
function getRouteByModule(file:string,module:{[key:string]:any}):RouteRecordRaw{
    let path:string;
    let name:string
    if(file.split('/').slice(-2).find(path=>path == 'layouts')){
        path = file.split('/').pop()?.split('.')[0].toLocaleLowerCase()!;
        name = path;
    }else{
        path = file.split('/').slice(-2).join('/').split('.')[0].toLocaleLowerCase()!;
        name = path.split('/').join('-')
    }
    const route:RouteRecordRaw = {
        name:`${name}`,
        path:`/${path}`,
        component:module.default
    } 
    //如果组件有自定义义路由信息，我们需要使用Object.assign()合并
    return module.default.route ? Object.assign(route,module.default.route) : route;
}

export default getRoutes
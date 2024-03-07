import _ from "lodash";
export default function envs(env:ImportMetaEnv) {
    const envs:ImportMetaEnv = _.cloneDeep(env);
    Object.keys(envs).forEach((e:string)=>{
        if(envs[e] === "true" || envs[e] === "false" ){
            switch (envs[e]) {
                case 'true':
                    envs[e] = true;
                    break;
                default:
                    envs[e] = false;
                    break;
            }
        }else if(/^\d+$/.test(envs[e])){
            envs[e] = Number(envs[e])
        }else{
            return;
        }
    })
    return envs;
}
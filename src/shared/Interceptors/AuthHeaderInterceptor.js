import { SERVICE } from "../hook/constant"

export const authHeaderInterceptor = (config) => {
    if(config.url !== SERVICE.LOGIN){
        config.headers.Authorization = 'Bearer 123';
    }
    return config
}
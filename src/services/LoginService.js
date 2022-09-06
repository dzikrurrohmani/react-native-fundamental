import { SERVICE } from "../shared/hook/constant"


export const loginService = ({doPost}) => {
    const authenticate = async (userCred={}) => {
        try {
            return await doPost({url: SERVICE.LOGIN, data: userCred});
        } catch (error) {
            throw error
        }
    } 
    return{
        authenticate,
    }
}
import { createContext } from "react";
import { KEY } from "../hook/constant";
import { useDeps } from "../hook/UseDependency";
import { Storage } from "../Storage";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const {loginService} = useDeps();
    const storage = Storage();

    const onLogin = async (userCred = {}) => {
        try {
            const response = await loginService.authenticate(userCred);
            if (response){
                await storage.storeData(KEY.TOKEN, response.token);
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }

    const isTokenExist = async () => {
        try {
            const token = await storage.getData(KEY.TOKEN);
            if (token) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false
        }
    }

    const onLogout = async () => {
        try {
            await storage.deleteData(KEY.TOKEN);
            return true
        } catch (error) {
            return false
        }
    }

    return <AuthContext.Provider value={{onLogin, onLogout, isTokenExist}}>{children}</AuthContext.Provider>
}
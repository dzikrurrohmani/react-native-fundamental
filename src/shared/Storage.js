import AsyncStorage  from "@react-native-async-storage/async-storage"


export const Storage = () => {
    const storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            throw error
        }
    }

    const getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value != null){
                return value;
            } else {
                return null;
            }
        } catch (error) {
            throw error
        }
    }
    const deleteData = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            throw error
        }
    }

    return{
        storeData,
        getData,
        deleteData,
    }
}
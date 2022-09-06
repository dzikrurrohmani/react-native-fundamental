import { useNavigation, useRoute } from "@react-navigation/native"
import { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import { ROUTE } from "../../shared/hook/constant"

const Menu1 = () => {
    const navigation = useNavigation();
    const route = useRoute();
    
    useEffect(()=>{
        if(route.params?.message){
            console.log('Menu1', route.params.message);
        }
    }, [route.params]);
    return(
        <MainContainer>
            <TouchableOpacity onPress={()=>{
                navigation.navigate(ROUTE.PIN, {
                    userId: '123',
                    prevPage: 'Menu1'
                })
            }}>
                <Text>Show Pin</Text>
            </TouchableOpacity>
        </MainContainer>
    )
}

export default Menu1;
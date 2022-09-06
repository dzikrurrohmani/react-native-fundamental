import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppBackground from "../../../shared/components/AppBackground"
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel"
import MainContainer from "../../../shared/components/MainContainer"
import { useTheme } from "../../../shared/context/ThemeContext"
import {FontAwesome} from "@expo/vector-icons"
import PromoView from "./components/PromoView"
import MenuView from "./components/MenuView"
import { ScrollView } from "react-native-gesture-handler"
import { useNavigation, useRoute } from "@react-navigation/native"
import { ROUTE } from "../../../shared/hook/constant"
import FormButton from "../../../shared/components/FormButton"
import { useEffect, useState } from "react"
import ModalDialog from "../../../shared/components/ModalDialog"
import { useAuth } from "../../../shared/hook/UseAuth"


const MainPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const {onLogout} = useAuth();
    // const [pinVisible, setPinVisible] = useState(false);
    const route = useRoute();
    useEffect(()=>{
        if (route.params?.message){
            console.log('Message', route.params.message);
        }
    }, [route.params]);

    const handlerLogout = async (route) => {
        await onLogout();
        navigation.replace(route);
    }

    return(
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text={"WMB"} avatarImg='https://picsum.photos/200/400'/>
                {modalVisible && <ModalDialog onPress={()=>setModalVisible(false)}/>}
                {/* {pinVisible && <PinDialog onPress={()=>setPinVisible(false)}/>} */}
                <ScrollView>
                    <View style={{flex: 1, margin: theme.spacing.s}}>
                        <HeaderPageLabel text={"POS"}/>
                        <View style={styles.container}>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={()=>setModalVisible(true)}>
                                    <FontAwesome name="sticky-note-o" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Add{'\n'} Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={()=>navigation.navigate('Menu1')}>
                                    <FontAwesome name="user-plus" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Customer{'\n'} Registration</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity style={styles.touchAble} onPress={()=>navigation.navigate(ROUTE.PIN, {
                                    userId: '123',
                                    // prevPage: ROUTE.MAIN
                                    prevPage: route.name
                                })}>
                                    <FontAwesome name="money" size={24} color={theme.color.primary}/>
                                    <Text style={styles.text}>Bill{'\n'} Payment</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <HeaderPageLabel text={"PROMO"}/>
                        <View zstyle={styles.container}>
                            <PromoView/>
                        </View>
                        <HeaderPageLabel text={"MENU"}/>
                        <View style={styles.container}>
                            <MenuView/>
                        </View>
                        <HeaderPageLabel text={"PROFILE"}/>
                        <View style={{marginHorizontal: theme.spacing.s}}>
                            <FormButton label={'Logout'} onClick={() => {
                                handlerLogout(ROUTE.LOGIN)
                                }}/>
                        </View>
                    </View>
                </ScrollView>
            </AppBackground>
        </MainContainer>    
    )
}

const styling = (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: theme.color.secondary,
        borderWidth: 1,
        borderRadius: theme.radius.m
    }, 
    menuContainer: {
        flex: 1,
        height: 64,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        color: theme.color.foreground,
        fontFamily: "Poppins-Regular"
    },
    touchAble: {
        alignItems: "center"
    }
})

export default MainPage;
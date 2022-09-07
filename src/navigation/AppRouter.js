import CreateStackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import HomePage from "../features/Home/HomePage";
import LoginPage from "../features/Login/LoginPage";
import PinPage from "../features/Pin/PinPage";
import WelcomePage from "../features/Welcome/WelcomePage";
import { ROUTE } from "../shared/hook/constant";
import { Entypo } from '@expo/vector-icons';
import { theme } from "../shared/Theme";
import MainPage from "../features/Home/Main/MainPage";
import Menu1 from "../features/Home/Menu1";
import { useAuth } from "../shared/hook/UseAuth";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Stack = CreateStackNavigator();

const AppRouter = ({initRoute=null}) => {
    const {isTokenExist} = useAuth();
    const [initialRoute, setInitialRoute] = useState(initRoute);
    useEffect(()=>{
        const onValidToken = async () => {
            try {
                const resp = await isTokenExist();
                if (resp) {
                    setInitialRoute(ROUTE.HOME);
                } else {
                    setInitialRoute(ROUTE.WELCOME);
                }
            } catch (error) {
                setInitialRoute(ROUTE.WELCOME);
            }
        }
        onValidToken();
    }, [])
    console.log('GetToken APPROUTER', initialRoute);
    return initialRoute !== null ? (
        <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.HOME} component={HomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.PIN} component={PinPage} options={{headerTitle:'', headerBackImage: ()=> <Entypo name="back" size={24} color={theme.color.foreground} />}}/>
            <Stack.Screen name={'Menu1'} component={Menu1}/>
        </Stack.Navigator>
    )  : (
        <View></View>
    )
}

export default AppRouter;
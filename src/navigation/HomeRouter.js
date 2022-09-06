import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainPage from "../features/Home/Main/MainPage";
import ProductList from "../features/product/ProductList";
import { ROUTE } from "../shared/hook/constant";
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from "../shared/context/ThemeContext";

const Tab = createBottomTabNavigator();
const HomeRouter = () => {
    const theme = useTheme()
    return(
        <Tab.Navigator screenOptions={({route})=> ({
            tabBarIcon: ({color, size}) => {
                switch (route.name) {
                    case ROUTE.MAIN:
                        return <FontAwesome name="home" size={size} color={color} />;
                    default:
                        return <FontAwesome name="product-hunt" size={size} color={color} />;
                }
            },
            tabBarActiveTintColor: theme.color.primary,
            tabBarInactiveTintColor: theme.color.foreground,
        })}>
            <Tab.Screen name={ROUTE.MAIN} component={MainPage} options={{headerShown: false}}/>
            <Tab.Screen name={ROUTE.PRODUCT} component={ProductList} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}
export default HomeRouter;
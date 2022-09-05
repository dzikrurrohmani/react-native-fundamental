import MainPage from '../features/Home/Main/MainPage';
import ProductList from '../features/Product/ProductList';
import { ROUTE } from '../shared/constants';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeRouter = () => {
  return (
    <Tab.Navigator
      //   initialRouteName={ROUTE.MAIN}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case ROUTE.MAIN:
              return <FontAwesome name="home" size={size} color={color} />;
            case ROUTE.PRODUCT:
              return (
                <FontAwesome name="product-hunt" size={size} color={color} />
              );
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen
        name={ROUTE.MAIN}
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={ROUTE.PRODUCT}
        component={ProductList}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default HomeRouter;

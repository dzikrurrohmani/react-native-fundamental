import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../features/Home/HomePage';
import LoginPage from '../features/Login/LoginPage';
import PinPage from '../features/Pin/PinPage';
import ProductList from '../features/Product/ProductList';
import WelcomePage from '../features/Welcome/WelcomePage';
import { ROUTE } from '../shared/constants';

const Stack = createStackNavigator();
const AppRouter = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE.HOME}>
      <Stack.Screen
        name={ROUTE.WELCOME}
        component={WelcomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTE.LOGIN}
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTE.HOME}
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTE.PRODUCT}
        component={ProductList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTE.PIN}
        component={PinPage}
        option={{
          headerTitle: '',
          headerBackImage: () => (
            <FontFace
              size={24}
              name="chevron-left"
              color={theme.colors.foreground}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRouter;

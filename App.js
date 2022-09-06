import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePage from './src/features/Home/Main/MainPage';
import LoginPage from './src/features/Login/LoginPage';
import ProductList from './src/features/product/ProductList';
import WelcomePage from './src/features/Welcome/WelcomePage';
import AppRouter from './src/navigation/AppRouter';
import { serviceFactory } from './src/services/ServiceFactory';
import { apiClientFactory } from './src/shared/ApiClientFactory';
import { clientInstance } from './src/shared/AxiosClient';
import { AuthProvider } from './src/shared/context/AuthContext';
import { DependencyProvider } from './src/shared/context/DependencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
  const fonts = useAppFont();
  const apiClient = apiClientFactory(clientInstance)
  const services = serviceFactory(apiClient);
  if (!fonts){
    return null;
  }
  return (
    <DependencyProvider services={services}>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <AuthProvider>
            <AppRouter/>
            </AuthProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </DependencyProvider>
  );
}


// WIFI YC
// BASE_URL=http://192.168.18.89:3001 npm start

// WIFI PABU
// BASE_URL=http://192.168.43.111:3001 npm start
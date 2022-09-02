import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/features/Home/HomePage';
import LoginPage from './src/features/Login/LoginPage';
import ProductList from './src/features/Product/ProductList';
import WelcomePage from './src/features/Welcome/WelcomePage';
import { serviceFactory } from './src/services/ServiceFactory';
import { DependencyProvider } from './src/shared/context/DependencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
  const fonts = useAppFont();
  const services = serviceFactory();
  if (!fonts) {
    return null;
  }
  return (
    <DependencyProvider services={services}>
      <ThemeProvider>
        {/* <WelcomePage /> */}
        {/* <LoginPage/> */}
        {/* <ProductList /> */}
        <HomePage/>
      </ThemeProvider>
    </DependencyProvider>
  );
}

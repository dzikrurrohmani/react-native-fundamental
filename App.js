import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/features/Login/LoginPage';
import WelcomePage from './src/features/Welcome/WelcomePage';
import { ThemeProvider } from './src/shared/context/ThemeContext';

export default function App() {
  return (
      <ThemeProvider>
        <WelcomePage/>
      {/* <LoginPage/> */}
      </ThemeProvider>
  );
}

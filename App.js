import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/features/Login/LoginPage';
import WelcomePage from './src/features/Welcome/WelcomePage';

export default function App() {
  return (
      // <WelcomePage/>
      <LoginPage/>
  );
}

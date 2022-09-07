import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const MainContainer = ({ hint = '', children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar translucent barStyle="dark-content" backgroundColor={'white'}/> */}
      {/* <View accessibilityHint={hint} style={{ flex: 1 }}> */}
        <StatusBar translucent style="auto" />
        {children}
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});

export default MainContainer;

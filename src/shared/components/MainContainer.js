import { StatusBar, StyleSheet, View } from 'react-native';

const MainContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="blue" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

export default MainContainer;

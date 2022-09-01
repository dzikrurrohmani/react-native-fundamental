import LottieView from 'lottie-react-native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppBackground } from '../../shared/components/AppBackground';
import MainContainer from '../../shared/components/MainContainer';

const WelcomePage = () => {
  return (
    <MainContainer>
      <AppBackground
        style={{
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <LottieView
          autoPlay
          source={require('../../../assets/img/animation-message.json')}
          //   style={styles.animation}
        />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>POS System</Text>
          <Text style={styles.subTitle}>Simple Point If Sales</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </AppBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
  },
  subTitle: {
    fontSize: 16,
    color: 'blue',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'stretch',
    marginHorizontal: 120,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomePage;

import LottieView from 'lottie-react-native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainContainer from '../../shared/components/MainContainer';

const WelcomePage = () => {
  return (
    <MainContainer>
      <ImageBackground
        source={require('../../../assets/img/bg-1.jpg')}
        resizeMode="cover"
        style={styles.background}
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
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 200,
    alignItems: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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

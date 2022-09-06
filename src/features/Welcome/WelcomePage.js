import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MainContainer from '../../shared/components/MainContainer';
import LottieView from 'lottie-react-native';
import AppBackground from '../../shared/components/AppBackground';
import TitleLabel from '../../shared/components/TitleLabel';
import FormButton from '../../shared/components/FormButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTE } from '../../shared/hook/constant';

const WelcomePage = () => {
  const navigation = useNavigation();
  return (
    <MainContainer>
      <AppBackground
        style={{
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <LottieView
          autoPlay
          style={styles.image}
          source={require('../../../assets/img/transfer-files.json')}
        />
        <View style={styles.titleContainer}>
          <TitleLabel text="Android OS" />
          <TitleLabel subTitle text="Welcome" />
        </View>
        <FormButton
          label="LOGIN"
          onClick={() => {
            navigation.replace(ROUTE.LOGIN);
          }}
        />
      </AppBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    width: 200,
    height: 200,
  },
  titleContainer: {
    alignItems: 'center',
  },
});

export default WelcomePage;

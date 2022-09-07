import {
  ImageBackground,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MainContainer from '../../shared/components/MainContainer';
import FormInput from '../../shared/components/FormInput';
import FormPassword from '../../shared/components/FormPassword';
import FormButton from '../../shared/components/FormButton';
import Spinner from '../../shared/components/Spinner';
import SnackBar from '../../shared/components/SnackBar';
import useLoginPage from './UseLoginPage';

const LoginPage = () => {
  const {
    viewState,
    userName,
    password,
    onChangeUserName,
    onChangePassword,
    onAuthenticate,
  } = useLoginPage();

  return (
    <MainContainer>
      {viewState.isLoading && <Spinner text="Loading..." />}
      <ImageBackground
        source={require('../../../assets/img/bg-2.jpeg')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Welcome !</Text>
        </View>
        <View style={styles.form}>
          <FormInput
            value={userName}
            onChangeValue={onChangeUserName}
            placeholder="Input Your Email"
            keyboardType="email"
          />
          <FormPassword
            value={password}
            onChangeValue={onChangePassword}
            placeholder="Input Your Password"
          />
          {/* <FormButton label='Login' onClick={()=>{navigation.replace(ROUTE.HOME)}}/> */}
          <FormButton label="Login" onClick={onAuthenticate} />
        </View>
        {viewState.error !== null && <SnackBar message={viewState.error.message} />}
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginLeft: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(92,93,95)',
  },
  // input: {
  //     height: 40,
  //     marginLeft: 16,
  //     marginRight: 16,
  //     marginTop: 8,
  //     borderWidth: 1,
  //     borderRadius: 12,
  //     padding: 10,
  //     borderColor: "#999",
  //     backgroundColor: 'rgb(234,235,240)'
  // },
  // inputPasswordContainer: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     paddingRight: 24
  // },
  form: {
    alignItems: 'stretch',
    flex: 2,
  },
  // button: {
  //     alignItems: 'center',
  //     backgroundColor: 'rgb(252,80,40)',
  //     padding: 10,
  //     borderRadius: 12,
  //     alignSelf: 'stretch',
  //     margin: 16
  // },
  // textButton: {
  //     color: '#fff'
  // }
});

export default LoginPage;

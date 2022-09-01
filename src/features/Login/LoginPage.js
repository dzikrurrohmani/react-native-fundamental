import LottieView from 'lottie-react-native';
import { useState } from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MainContainer from '../../shared/components/MainContainer';
import { Entypo } from '@expo/vector-icons';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  return (
    <MainContainer>
      <ImageBackground
        source={require('../../../assets/img/bg-1.jpg')}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Login !</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            value={userName}
            placeholder="Input your email"
          />
          <View style={[styles.input, styles.inputPasswordContainer]}>
            <TextInput
              secureTextEntry={hidePass}
              onChangeText={setUserPassword}
              value={userPassword}
              placeholder="Input your password"
              style={{ width: '50%' }}
            />
            <Pressable onPress={() => setHidePass(!hidePass)}>
              <Entypo
                name={hidePass ? 'eye-with-line' : 'eye'}
                size={18}
                color="black"
              />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
      </ImageBackground>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
  },
  form: {
    flex: 2,
    alignItems: 'stretch',
  },
  input: {
    height: 40,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 8,
    borderRadius: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#999',
    backgroundColor: 'pink',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 12,
    alignSelf: 'stretch',
    marginHorizontal: 120,
    margin: 16,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 24,
  },
});

export default LoginPage;

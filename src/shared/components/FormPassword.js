import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

const FormPassword = ({ value, onChangeValue, placeholder = '' }) => {
  const theme = useTheme();
  const styles = styling(theme);
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={[styles.input, styles.inputPasswordContainer]}>
      <TextInput
        secureTextEntry={hidePass}
        onChangeText={onChangeValue}
        value={value}
        placeholder={placeholder}
        style={{ width: '100%' }}
      ></TextInput>
      <Pressable onPress={() => setHidePass(!hidePass)}>
        <Entypo
          name={hidePass ? 'eye-with-line' : 'eye'}
          size={20}
          color={theme.color.foreground}
        />
      </Pressable>
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    inputPasswordContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingRight: 24,
    },
    input: {
      height: 40,
      marginLeft: theme.spacing.m,
      marginRight: theme.spacing.m,
      marginTop: theme.spacing.s,
      borderRadius: theme.radius.m,
      borderWidth: 1,
      padding: theme.spacing.s,
      borderColor: theme.color.foreground,
      backgroundColor: theme.color.secondary,
      alignItems: 'center',
    },
  });

export default FormPassword;

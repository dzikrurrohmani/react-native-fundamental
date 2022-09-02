import { StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const FormInput = ({
  value,
  onChangeValue,
  placeholder = '',
  keyboard = 'default',
}) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeValue}
      value={value}
      keyboardType={keyboard}
    />
  );
};

const styling = (theme) =>
  StyleSheet.create({
    input: {
      height: 40,
      marginLeft: theme.spacing.m,
      marginRight: theme.spacing.m,
      marginTop: theme.spacing.m,
      borderWidth: 1,
      borderRadius: theme.radius.m,
      padding: theme.spacing.s,
      backgroundColor: theme.color.secondary,
      borderColor: theme.color.foreground,
      fontFamily: 'Poppins-Regular'
    },
  });

export default FormInput;

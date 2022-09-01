import { StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const FormPassword = ({
  value,
  onChangeValue,
  placeholder = '',
}) => {
  const theme = useTheme();
  const styles = styling(theme);
  const [hidePass, setHidePass] = useState(true);
  return (
    <View style={[styles.input, styles.inputPasswordContainer]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeValue}
        value={value}
        keyboardType={keyboard}
      />
      <Pressable onPress={() => setHidePass(!hidePass)}>
        <Entypo
          name={hidePass ? 'eye-with-line' : 'eye'}
          size={18}
          color="black"
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
      borderWidth: 1,
      borderRadius: theme.radius.m,
      padding: theme.spacing.s,
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.foreground,
      alignItems: 'center'
    },
  });

export default FormPassword;

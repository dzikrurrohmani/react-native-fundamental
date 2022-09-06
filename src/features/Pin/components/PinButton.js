import { useTheme } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PinButton = ({ text, onPress }) => {
  const theme = useTheme();
  const styles = styling(theme);
  const handleButtonPress = () => {
    if (text !== '<') {
      onPress((prevState) => {
        if (prevState.length < 6) {
          return prevState + text;
        } else {
          return prevState;
        }
      });
    } else {
      onPress((prevState) => prevState.slice(0, -1));
    }
  };

  const renderButton = () => {
    if (text !== '-1') {
      return (
        <TouchableOpacity>
          <View style={styles.circleButton}>
            <Text style={[theme.text.subtitle2]}></Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return <View style={{ width: 96 }} />;
    }
  };
  return <>{renderButton()}</>;
};

const styling = (theme) =>
  StyleSheet.create({
    circleButton: {
      width: 64,
      height: 64,
      borderRadius: 32, // setengah kali lebar agar menjadi lingkaran
      borderColor: theme.color.foreground,
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing.s,
    },
  });

export default PinButton;

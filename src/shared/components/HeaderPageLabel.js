import { Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export const HeaderPageLabel = ({ text }) => {
  const theme = useTheme();
  return (
    <View>
      <Text style={[theme.text.subtitle, { fontWeight: 'bold' }]}>{text}</Text>
    </View>
  );
};

import { ImageBackground } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const AppBackground = ({ children, style }) => {
  const theme = useTheme();
  return (
    <ImageBackground
      source={theme.background}
      resizeMode="cover"
      style={[styles.container, style]}
    >
      {children}
    </ImageBackground>
  );
};

const styles = {
  container: {
    flex: 1,
  },
};

export default AppBackground;

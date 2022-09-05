import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../shared/context/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';

const MenuItem = ({ menu }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TouchableOpacity style={{ alignItems: 'center' }}>
      <View style={styles.circularMenu}>
        <FontAwesome name={menu.icon} size={24} color={theme.color.primary} />
      </View>
      <Text style={styles.textMenu}>{menu.menu}</Text>
    </TouchableOpacity>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    circularMenu: {
      borderColor: theme.color.primary,
      borderWidth: 2,
      width: 64,
      height: 64,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      margin: theme.spacing.s,
      borderRadius: 32,
    },
    textMenu: {
      flex: 1,
      textAlign: 'center',
      fontSize: 12,
      color: theme.color.foreground,
      fontFamily: 'Poppins-Regular',
    },
  });

export default MenuItem;

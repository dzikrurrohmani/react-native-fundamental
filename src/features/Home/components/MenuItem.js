import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../../../shared/context/ThemeContext';
import { FontAwesome } from '@expo/vector-icons';

const MenuItem = ({ menu }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TouchableOpacity>
      <View style={styles.menuContainer}>
        <View style={styles.menuContainer2}>
          <Text style={styles.textMenu}>{menu.menu}</Text>
        </View>
        <FontAwesome name="cutlery" size={24} color={theme.color.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    menuContainer: {
      borderColor: theme.color.primary,
      borderWidth: 1,
      margin: theme.spacing.s,
      width: 110,
      height: 110,
      borderRadius: theme.radius.m,
      paddingVertical: theme.spacing.l,
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    menuContainer2: {
      flex: 1,
      width: '33%',
      flexDirection: 'row',
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

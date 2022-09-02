import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../../../shared/context/ThemeContext';

const Item = ({ productName }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <View style={styles.item}>
      <Text style={styles.itenText}>{productName}</Text>
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    item: {
      padding: theme.spacing.s,
      marginVertical: theme.spacing.xs,
      marginHorizontal: theme.spacing.s,
      borderBottomWidth: 1,
      borderBottomColor: theme.color.secondary,
    },
    itenText: {
      fontSize: 14,
      color: theme.color.foreground,
      fontFamily: 'Poppins-Regular',
    },
  });

export default Item;

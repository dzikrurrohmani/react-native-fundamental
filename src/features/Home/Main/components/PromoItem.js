import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '../../../../shared/context/ThemeContext';

const PromoItem = ({promo}) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <TouchableOpacity>
      <View style={styles.promoContainer}>
        <View style={styles.promoContainer2}>
          <Text style={styles.textPromo}>{promo.promo}</Text>
        </View>
        <FontAwesome
          name="check-circle-o"
          size={16}
          color={theme.color.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    promoContainer: {
      borderColor: theme.color.primary,
      borderWidth: 1,
      margin: theme.spacing.s,
      width: 180,
      height: 60,
      borderRadius: theme.radius.m,
      padding: theme.spacing.s,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    promoContainer2: {
      width: '50%',
      flexDirection: 'row',
    },
    textPromo: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 12,
      color: theme.color.foreground,
      fontFamily: 'Poppins-Regular',
    },
  });

export default PromoItem;

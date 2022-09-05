import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import Avatar from './Avatar';

export const HeaderPageLabel = ({
  text,
  avatarImg = '',
  showBorder = false,
}) => {
  const theme = useTheme();
  const styles = styling(theme);
  let borderStyle = {};
  if (showBorder) {
    borderStyle = {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.1)',
    };
  }

  return (
    <View style={[styles.label, borderStyle]}>
      <Text style={[theme.text.subtitle, { fontWeight: 'bold' }]}>{text}</Text>
      {avatarImg && <Avatar imageUrl={avatarImg} />}
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    label: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing.s,
      alignItems: 'center',
      marginTop: theme.spacing.s,
    },
  });

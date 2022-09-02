import { FontAwesome } from '@expo/vector-icons';
import MainContainer from '../../shared/components/MainContainer';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderPageLabel } from '../../shared/components/HeaderPageLabel';
import AppBackground from '../../shared/components/AppBackground';
import { useTheme } from '../../shared/context/ThemeContext';
import PromoView from './components/PromoView';
import MenuView from './components/MenuView';

const HomePage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <MainContainer>
      <AppBackground>
        <View style={{ flex: 1, margin: theme.spacing.s }}>
          <HeaderPageLabel text="POS" />
          <View style={styles.container}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble}>
                <FontAwesome
                  name="sticky-note-o"
                  size={24}
                  color={theme.color.primary}
                ></FontAwesome>
                <Text style={styles.text}>Add{'\n'} Order</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble}>
                <FontAwesome
                  name="user-plus"
                  size={24}
                  color={theme.color.primary}
                ></FontAwesome>
                <Text style={styles.text}>Customer{'\n'} Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble}>
                <FontAwesome
                  name="money"
                  size={24}
                  color={theme.color.primary}
                ></FontAwesome>
                <Text style={styles.text}>Bill{'\n'} Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <HeaderPageLabel text="Promo" />
            <PromoView />
          </View>
          <View>
            <HeaderPageLabel text="Menu" />
            <MenuView />
          </View>
        </View>
      </AppBackground>
    </MainContainer>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      borderColor: theme.color.primary,
      borderWidth: 1,
      borderRadius: theme.radius.m,
    },
    menuContainer: {
      flex: 1,
      height: 64,
      justifyContent: 'center',
    },
    text: {
      textAlign: 'center',
      fontSize: 12,
      color: theme.color.foreground,
      fontFamily: 'Poppins-Regular',
    },
    touchAble: {
      alignItems: 'center',
    },
  });

export default HomePage;

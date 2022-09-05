import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HeaderPageLabel } from '../../../shared/components/HeaderPageLabel';
import AppBackground from '../../../shared/components/AppBackground';
import MainContainer from '../../../shared/components/MainContainer';
import { useTheme } from '../../../shared/context/ThemeContext';
import PromoView from './components/PromoView';
import MenuView from './components/MenuView';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const MainPage = () => {
  const theme = useTheme();
  const styles = styling(theme);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <MainContainer>
      <AppBackground>
        <View style={{ flex: 1, margin: theme.spacing.s }}>
          <HeaderPageLabel text="POS" />
          {modalVisible && (
            <ModalDialog
              visible={modalVisible}
              onPress={() => setModalVisible(false)}
            />
          )}
          <View style={styles.container}>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble} onPress={()=>{}}>
                <FontAwesome
                  name="sticky-note-o"
                  size={24}
                  color={theme.color.primary}
                ></FontAwesome>
                <Text style={styles.text}>Add{'\n'} Order</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble} onPress={()=>{}}>
                <FontAwesome
                  name="user-plus"
                  size={24}
                  color={theme.color.primary}
                ></FontAwesome>
                <Text style={styles.text}>Customer{'\n'} Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuContainer}>
              <TouchableOpacity style={styles.touchAble} onPress={()=>{}}>
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
          <View>
            <HeaderPageLabel text="Profile" />
            <View style={{ margin: theme.spacing.m }}>
              <TouchableOpacity onPress={() => navigation.replace(ROUTE.LOGIN)}>
                <Text>Logout</Text>
              </TouchableOpacity>
            </View>
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

export default MainPage;

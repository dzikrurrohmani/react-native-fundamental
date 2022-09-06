import { Button, Modal, StyleSheet, Text, View, TextInput } from "react-native";

import { useTheme } from "../context/ThemeContext";

const ModalBillPayment = ({ visible, onPress }) => {
  const theme = useTheme();
  const styles = styling(theme);
  return (
    <View style={styles.mainContainer}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.mainContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.headline}> Please Input Pin </Text>
            <Text style={styles.headline}> (user Id 123) </Text>
            <TextInput
              placeholder="Password"
              style={styles.textInput}
            ></TextInput>
            <Button onPress={onPress} title="Submit" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styling = (theme) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalContainer: {
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      height: "100%",
      backgroundColor: "white",
      alignSelf: "stretch",
      padding: 32,
    },
    textInput: {
      alignSelf: "stretch",
      padding: 10,
      marginLeft: 50,
      margin: 5,
      marginRight: 50,
      borderBottomColor: theme.colors.primary,
      borderBottomWidth: 1,

      // backgroundColor: '#000',
    },

    headline: {
      fontSize: 18,
      marginTop: 0,

      justifyContent: "center",
      alignItems: "center",

      alignSelf: "stretch",
      padding: 10,
      marginLeft: 90,
      margin: 5,
      marginRight: 50,
    },
  });

export default ModalBillPayment;

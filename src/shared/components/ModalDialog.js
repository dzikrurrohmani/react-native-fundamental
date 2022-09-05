import { Modal, StyleSheet, View } from 'react-native';

const ModalDialog = ({ visible, onPress }) => {
  return (
    <View style={styles.mainContainer}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text>Ini modal</Text>
          <Button onPress={onPress}></Button>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default ModalDialog;

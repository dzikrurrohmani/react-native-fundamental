import { Children, useEffect } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import FormButton from './FormButton';

const ModalDialog = ({ visible = true, children, isAutoClose = false, onClose }) => {
  useEffect(() => {
    if (isAutoClose) {
      const autoClose = setTimeout(onClose, 3000);
      return () => {
        clearTimeout(autoClose);
      };
    }
  });

  return (
    <View style={styles.mainContainer}>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <Pressable
          accessibilityHint="modal"
          style={styles.mainContainer}
          onPress={onClose}
        >
          <View style={styles.modalContainer}>
            {children}
          </View>
        </Pressable>
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
    height: '50%',
    backgroundColor: 'white',
    alignSelf: 'stretch',
    padding: 32,
  },
});

export default ModalDialog;

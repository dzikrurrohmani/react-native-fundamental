import { Modal, StyleSheet, Text, View } from "react-native"
import FormButton from "./FormButton"

const ModalDialog = ({visible, onPress}) => {
    return(
        <View style={styles.mainContainer}>
            <Modal
                visible={visible}
                animationType='slide'
                transparent={true}
            >
                <View style={styles.mainContainer}>
                    <View style={styles.modalContainer}>
                        <Text>Ini Modal</Text>
                        <FormButton label={'Dismiss'} onClick={onPress}/>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

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
    }
})

export default ModalDialog;
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "../../../../shared/context/ThemeContext";

const MenuItem = ({product}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const renderMenuItem = () => {
        if(product.menu !== ''){
            return (
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <View style={styles.circularMenu}>
                        <FontAwesome name="th-list" size={32} color="black"/>
                    </View>
                    <Text>{product.menu}</Text>
                </TouchableOpacity>
            )        
        } else {
            return (
                <View style={styles.baseView}></View>
            )
        }
    }
    return (
        <>
            {renderMenuItem()}
        </>
    )
}
const styling = (theme) => StyleSheet.create({
    baseView: {
        width: 64,
        height: 64,
        margin: theme.spacing.s,
    },
    circularMenu: {
        width: 64,
        height: 64,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    }
})
export default MenuItem
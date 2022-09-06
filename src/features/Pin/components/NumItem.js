import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useTheme} from "../../../shared/context/ThemeContext";

const NumItem = ({product, onPress}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const renderNumItem = () => {
        if(product.id !== -1){
            return (
                <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
                    <View style={styles.circularMenu}>
                        <Text style={styles.text}>{product.id}</Text>
                    </View>
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
            {renderNumItem()}
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
    },
    text: {
        fontSize: theme.spacing.l,
    },
    circleButton: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderColor: theme.color.foreground,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: theme.spacing.s,
    }
})

export const PinButton = ({text, onPress}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const handlerButtonPress = () => {
        if (text !== '<'){
            onPress(prevState => {
                if (prevState.length < 6){
                    return prevState + text;
                } else return prevState
            })
        } else {
            onPress(prevState => prevState.slice(0, -1))
        }
    }
    const renderButton = () => {
        if (text !== '-1') {
            return(
                <TouchableOpacity onPress={handlerButtonPress}>
                    <View style={styles.circleButton}>
                        <Text style={theme.text.title}>{text}</Text>
                    </View>
                </TouchableOpacity>
            )
        } else {
            return <View style={{width: 80}}></View>
        }
    }
    return(
        <>
            {renderButton()}
        </>
    )
}

export default NumItem
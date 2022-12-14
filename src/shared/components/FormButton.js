import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext"

const FormButton = ({label, onClick}) => {
    const theme = useTheme();
    const style = styling(theme);
    return(
        <TouchableOpacity style={style.button} onPress={onClick}>
            <Text style={style.textButton}>{label}</Text>
        </TouchableOpacity>
    )
}

const styling = (theme) => (StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: theme.color.primary,
        padding: theme.spacing.s,
        borderRadius: theme.radius.m,
        alignSelf: 'stretch',
        margin: theme.spacing.m,
    },
    textButton: {
        color: theme.color.secondary
    }
}))

export default FormButton;
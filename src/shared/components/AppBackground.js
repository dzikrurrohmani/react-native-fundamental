import { ImageBackground, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext"
import { theme } from "../Theme";

const AppBackground = ({children, style}) => {
const theme = useTheme();

return (
<ImageBackground source={theme.background} resizeMode='cover' style={[styles.container, style]}>
{children}
</ImageBackground>
)
}

const styles = StyleSheet.create({
container : {
    paddingTop: theme.spacing.s,
    paddingHorizontal: theme.spacing.s,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
}
})

export default AppBackground 
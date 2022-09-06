import { Image, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext"


const Avatar = ({imageUrl=''}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return(
        <Image source={{uri: imageUrl}} style={styles.avatar}/>
    )
}

const styling = (theme) => StyleSheet.create({
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 23,
        overflow: 'hidden',
    }
})

export default Avatar;
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext"
import Avatar from "./Avatar";

const HeaderPageLabel = ({text='', avatarImg=''}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return(
        <View style={styles.label}>
            <Text style={[theme.text.subtitle, {fontWeight: 'bold'}]}>{text}</Text>
            {avatarImg && <Avatar imageUrl={avatarImg}/>}
        </View>
    )
}

const styling = (theme) => StyleSheet.create({
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: theme.spacing.s,
        margin: theme.spacing.s,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
    }
})

export default HeaderPageLabel;
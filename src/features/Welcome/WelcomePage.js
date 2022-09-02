
import { ImageBackground, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import MainContainer from "../../shared/components/MainContainer"
import LottieView from "lottie-react-native"
import { AppBackground } from '../../shared/components/AppBackground';
import FormButton from "../../shared/components/FormButton"
import TitleLabel from "../../shared/components/TitleLabel"

const WelcomePage = () =>{
    return (
        <MainContainer>
            <AppBackground style={{
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <LottieView 
                    autoPlay 
                    style={styles.image} 
                    source={require('../../../assets/img/animation-message.json')}/>

                <View style={styles.titleContainer}>
                    <TitleLabel text = 'POS System'/>
                    <TitleLabel subTitle text='Simple Point of Sales'/>
                </View>
                <FormButton label='Sign In' onClick={()=>{}}></FormButton>
            </AppBackground>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image : {
        width : 200,
        height : 200,
        alignItems : "center"
    },
    titleContainer : {
        alignItems : "center"
    }
})

export default WelcomePage;
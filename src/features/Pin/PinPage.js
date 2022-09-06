import { useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import FormButton from "../../shared/components/FormButton";
import { useTheme } from "../../shared/context/ThemeContext"
import { Entypo } from '@expo/vector-icons';
import MainContainer from "../../shared/components/MainContainer";
import { theme } from "../../shared/Theme";
import { useNavigation, useRoute } from "@react-navigation/native";
import NumItem, { PinButton } from "./components/NumItem";
import PinInputIndicator from "./components/PinInputIndicator";

const PinPage = ({visible, onPress}) => {
    const theme = useTheme();
    const [pin, setPin] = useState('');
    const navigation = useNavigation();
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});
    const [renderNum, setRenderNum] = useState({});
    const [pinButtons, setPinButtons] = useState();

    let numbers = [
        {id: '1'},
        {id: '2'},
        {id: '3'},
        {id: '4'},
        {id: '5'},
        {id: '6'},
        {id: '7'},
        {id: '8'},
        {id: '9'},
        {id: '0'},
    ];

    useEffect(()=>{
        let number = numbers.sort(()=>Math.random()-0.5)
        number.push({id: '<'})
        setRenderNum(number)
        setPinButtons(renderPinButton());
    }, [])

    let contentStyle = {
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'center',
        display: 'flex',
    }
    
    const renderNumItem = ({item}) => {
        return <NumItem product={item} onPress={()=>{
            item.id !== '<' && pin.length <= 6 ? setPin(pin + item.id) : setPin(pin.slice(0, -1))
        }}/>
    }

    //Get Param
    useEffect(()=>{
        if (route.params?.prevPage){
            setPinParam({
                prevPage: route.params.prevPage
            })
        }
    }, [route.params]);

    const renderPins = ({item}) => {
        return <PinButton text={item} onPress={setPin}/>
    }
    const renderPinButton = () => {
        const pinLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const pins = [];

        const shuffledPinLabel = pinLabels.map(value=>({value, sort: Math.random()})).sort((a,b)=>a.sort-b.sort).map(({value})=>value);
        shuffledPinLabel.splice(9, 0, '-1');
        shuffledPinLabel.push('<');

        for (let i = 0; i < shuffledPinLabel.length; i++){
            const startIndex = (i * 3);
            const endIndex = (i * 3 + 3);
            const buttons = shuffledPinLabel.slice(startIndex, endIndex);
            const b = (
                <FlatList key={i}
                    data={buttons}
                    horizontal
                    renderItem={renderPins}
                    keyExtractor={item=>item}
                    contentContainerStyle={{flex: 1, justifyContent: 'space-evenly'}}
                    />
            )
            pins.push(b)
        }
        return pins

    }

    return(
        <MainContainer>
            <View style={styles.pinContainer}>
                <View style={styles.pinView}>
                    <Text style={[theme.text.subtitle, styles.pinLabel]}>Please Input PIN{'\n'} (User Id: 123)</Text> 
                    {/* <TextInput  style={styles.pinInput} value={pin} onChangeText={setPin} keyboardType="numeric" maxLength={6}></TextInput> */}
                    <View style={{margin: theme.spacing.l}}>
                        <PinInputIndicator pinVal={pin}/>
                    </View>
                </View>
            </View>
            {/* <View style={{flex: 1, marginHorizontal: theme.spacing.m}}>
                <FlatList
                    data={renderNum}
                    renderItem={renderNumItem}
                    keyExtractor={item=>item.id}
                    contentContainerStyle={contentStyle}
                    numColumns={3}
                />
            </View> */}
            <View stle={{flex: 1, justifyContent: 'center'}}>
                {pinButtons}
            </View>
            <View style={{margin: theme.spacing.l}}>
                <FormButton label={'Submit'} onClick={()=>{
                    console.log(pin)
                    navigation.navigate(pinParam.prevPage, {
                        message: 'OK'
                    })
                }}/>
            </View>
        </MainContainer>   
    )
}

const styles = StyleSheet.create({
    pinContainer: {
        alignItems: 'center',
    },
    pinView: {
        width: '50%',
    },
    pinLabel: {
        textAlign: 'center',
    },
    pinInput: {
        borderBottomColor: theme.color.foreground,
        borderBottomWidth: 1,
        marginVertical: theme.spacing.l,
        fontSize: 32,
        textAlign: 'center',
    }
})

export default PinPage;
import { FlatList, Text, TextInput, View } from 'react-native';
import MainContainer from '../../shared/components/MainContainer';
import { useNavigation, useRoute } from '@react-navigation/native';
import FormButton from '../../shared/components/FormButton';
import { useEffect, useState } from 'react';
import { useTheme } from '../../shared/context/ThemeContext';
import PinButton from './components/PinButton';
import PinInputIndicator from './components/PinInputIndicator';

const PinPage = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const [pinParam, setPinParam] = useState({});
  const [pin, setPin] = useState('');
  const [pinButtons, setPinButtons] = useState([]);
  useEffect(() => {
    if (route.params?.userId && route.params?.prevPage) {
      setPinParam({
        userId: route.params.userId,
        prevPage: route.params.prevPage,
      });
    }
  }, [route.params]);

  useEffect(() => {
    setPinButtons(renderPinButton());
  }, []);

  const renderPins = ({ item }) => {
    return <PinButton text={item} onPress={setPin} />;
  };

  const renderPinButton = () => {
    const pins = [];
    const pinLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const shuffledPinLabels = pinLabels
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    shuffledPinLabels.splice(9, 0, '-1');
    // shuffledPinLabels.join()
    shuffledPinLabels.push('<');

    for (let i = 0; i < shuffledPinLabels.length; i++) {
      const startIndex = i * 3;
      const endIndex = i * 3 + 3;
      const buttons = shuffledPinLabels.slice(startIndex, endIndex);
      const b = (
        <FlatList
          key={1}
          data={buttons}
          horizontal
          renderItem={renderPins}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flex: 1, justifyContent: 'space-evenly' }}
        />
      );
      pins.push(b);
    }
    return pins;
  };

  return (
    <MainContainer>
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: '50%' }}>
          <Text
            style={[
              theme.text.subtitle,
              {
                textAlign: 'center',
              },
            ]}
          >
            Please input PIN {'\n'} (User id : {pinParam.userId})
          </Text>
          <View style={{ margin: theme.spacing.l }}>
            <PinInputIndicator pinVal={pin} />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>{pinButtons}</View>
      <FormButton
        onClick={() => {
          console.log(pin);
          navigation.navigate(pinParam.prevPage, {
            message: 'ok',
          });
        }}
        label={'Submit'}
      ></FormButton>
    </MainContainer>
  );
};

export default PinPage;

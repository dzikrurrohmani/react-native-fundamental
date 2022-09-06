import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';
import { useTheme } from '../../../shared/context/ThemeContext';

const PinInputIndicator = ({ pinVal }) => {
  const theme = useTheme();
  const renderIndicator = () => {
    let indicators = [];
    for (let i = 0; i < 6; i++) {
      indicators.push(
        <FontAwesome
          key={i}
          name={pinVal[i] ? 'circle' : 'circle-o'}
          size={24}
          color={theme.color.foreground}
          style={{ marginHorizontal: theme.spacing.l }}
        />
      );
    }
    return indicators;
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
      {renderIndicator()}
    </View>
  );
};

export default PinInputIndicator;

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '../shared/context/ThemeContext';
import {render} from "@testing-library/react-native"

export const themeRender = (wrappedUi, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return (
      <ThemeProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    );
  };
  return render(wrappedUi, { wrapper: Wrapper, ...renderOptions });
};

import { render, screen } from '@testing-library/react-native';
import WelcomePage from '../../features/Welcome/WelcomePage';
import { themeRender } from '../../testHelper/CustomRender';

// const mockUseLogin = jest.fn();
// jest.mock('../../features/Login/UseLoginPage', () => () => mockUseLogin());
describe('WelcomePage', () => {
  test('Should render properly', () => {
    // mockUseLogin.mockReturnValue({
    //   viewState: { isLoading: false, data: null, error: null },
    //   userName: '',
    //   password: '',
    //   onChangeUserName: jest.fn(),
    //   onChangePassword: jest.fn(),
    //   onAuthenticate: jest.fn(),
    // });
    // render(
    //   <ThemeProvider>
    //     <LoginPage />
    //   </ThemeProvider>
    // );
    themeRender(<WelcomePage/>)
    expect(screen.queryByText('POS System')).toBeTruthy();
    expect(screen.queryByText('Sign In')).toBeTruthy();
  });

});

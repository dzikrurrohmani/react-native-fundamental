import LoginPage from '../../features/Login/LoginPage';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from '../../shared/context/ThemeContext';
import { themeRender } from '../../testHelper/CustomRender';

const mockUseLogin = jest.fn();
jest.mock('../../features/Login/UseLoginPage', () => () => mockUseLogin());
describe('Login Page', () => {
  test('Should render properly', () => {
    mockUseLogin.mockReturnValue({
      viewState: { isLoading: false, data: null, error: null },
      userName: '',
      password: '',
      onChangeUserName: jest.fn(),
      onChangePassword: jest.fn(),
      onAuthenticate: jest.fn(),
    });
    // render(
    //   <ThemeProvider>
    //     <LoginPage />
    //   </ThemeProvider>
    // );
    themeRender(<LoginPage/>)
    expect(screen.queryByPlaceholderText('Input Your Email')).toBeTruthy();
    expect(screen.queryByPlaceholderText('Input Your Password')).toBeTruthy();
    expect(screen.queryByText('Login')).toBeTruthy();
  });

  test('Should show render when loading', () => {
    mockUseLogin.mockReturnValue({
      viewState: { isLoading: true, data: null, error: null },
      userName: '',
      password: '',
      onChangeUserName: jest.fn(),
      onChangePassword: jest.fn(),
      onAuthenticate: jest.fn(),
    });
    // render(
    //   <ThemeProvider>
    //     <LoginPage />
    //   </ThemeProvider>
    // );
    themeRender(<LoginPage/>)
    expect(screen.queryByText('Loading...')).toBeTruthy();
  });

  test('Should show snackbar when error', () => {
    mockUseLogin.mockReturnValue({
      viewState: { isLoading: false, data: null, error: new Error('error') },
      userName: '',
      password: '',
      onChangeUserName: jest.fn(),
      onChangePassword: jest.fn(),
      onAuthenticate: jest.fn(),
    });
    // render(
    //   <ThemeProvider>
    //     <LoginPage />
    //   </ThemeProvider>
    // );
    themeRender(<LoginPage/>)
    expect(screen.queryByText('error')).toBeTruthy();
  });
});

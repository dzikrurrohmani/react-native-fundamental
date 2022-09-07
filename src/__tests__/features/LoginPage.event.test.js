import LoginPage from '../../features/Login/LoginPage';
import {
  fireEvent,
  waitFor,
  render,
  screen,
} from '@testing-library/react-native';
import { themeRender } from '../../testHelper/CustomRender';
import { ROUTE } from '../../shared/hook/constant';

const mockOnLogin = jest.fn();
const mockReplaceNavigate = jest.fn();
jest.mock('../../shared/hook/UseAuth', () => ({
  useAuth: () => mockOnLogin(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    replace: mockReplaceNavigate,
  }),
}));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Login Page Event', () => {
  test('Success Login', async () => {
    mockOnLogin.mockReturnValue({
      onLogin: jest.fn().mockResolvedValue(true),
    });
    themeRender(<LoginPage />);
    const userNameElem = screen.getByPlaceholderText(/email/i);
    const passwordElem = screen.getByPlaceholderText(/password/i);
    fireEvent.changeText(userNameElem, { target: { value: 'dummyUser' } });
    fireEvent.changeText(passwordElem, { target: { value: 'dummyPassword' } });

    const loginButtonElem = screen.getByText(/Login/i);
    fireEvent.press(loginButtonElem);

    await waitFor(() => {
      expect(mockReplaceNavigate).toHaveBeenCalledWith(ROUTE.HOME);
    });
  });

  test('Should show error when user name and password is empty', async () => {
    mockOnLogin.mockReturnValue({
      onLogin: jest.fn(),
    });
    themeRender(<LoginPage />);
    const loginButtonElem = screen.getByText(/Login/i);
    fireEvent.press(loginButtonElem);

    await waitFor(() => {
      const errorElem = screen.getByText(/Please input/i);
      expect(errorElem).toBeTruthy();
    });
  });
});

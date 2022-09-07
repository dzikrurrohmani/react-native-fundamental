import AppRouter from '../../navigation/AppRouter';
import { themeRender } from '../../testHelper/CustomRender';
import { waitFor, screen, fireEvent } from '@testing-library/react-native';
import { ROUTE } from '../../shared/hook/constant';

const mockTokenExist = jest.fn();
const mockOnLogout = jest.fn();
jest.mock('../../shared/hook/UseAuth', () => {
  return {
    useAuth: () => ({
      isTokenExist: mockTokenExist,
      onLogout: mockOnLogout,
    }),
  };
});
describe('App Router', () => {
  test(' should navigate to home when token is exist', () => {
    mockTokenExist.mockResolvedValue(true);
    themeRender(<AppRouter />);
    expect(waitFor(() => screen.getAllByA11yHint('Home'))).toBeTruthy();
  });
  test(' should navigate to welcome page when token is not exist', () => {
    mockTokenExist.mockResolvedValue(false);
    themeRender(<AppRouter />);
    expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy();
  });
  test(' should navigate to login when token throws exception', () => {
    mockTokenExist.mockRejectedValue(new Error('error'));
    themeRender(<AppRouter />);
    expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy();
  });

  test('Should navigate to login when user logout', () => {
    mockOnLogout.mockResolvedValue(true);
    themeRender(<AppRouter initRoute={ROUTE.HOME} />);
    const logoutButtonElem = screen.getByText(/Logout/);
    fireEvent.press(logoutButtonElem);
    expect(waitFor(() => screen.getAllByA11yHint('Login'))).toBeTruthy();
  });
});

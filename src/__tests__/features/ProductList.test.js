import { screen } from '@testing-library/react-native';
import ProductList from '../../features/product/ProductList';
import { themeRender } from '../../testHelper/CustomRender';

const mockUseProductList = jest.fn();
jest.mock(
  '../../features/product/UseProductList',
  () => () => mockUseProductList()
);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
describe('Product List', () => {
  test('Should render some products when first load', () => {
    mockUseProductList.mockReturnValue({
      viewState: {
        isLoading: false,
        data: [
          {
            id: '999',
            productName: 'dummy 1',
          },
          {
            id: '998',
            productName: 'dummy 2',
          },
        ],
        error: null,
      },
      onRefresh: jest.fn(),
      onFetcMore: jest.fn(),
      onDeleteItem: jest.fn(),
    });
    themeRender(<ProductList />);
    expect(screen.getAllByA11yHint('product-items').length).toBe(2);
  });
});

// import ProductList from '../../features/product/ProductList';
// import { themeRender } from '../../testHelper/CustomRender';
// import { screen } from '@testing-library/react-native';

// const mockUseProductList = jest.fn();
// jest.mock(
//   '../../features/product/UseProductList',
//   () => () => mockUseProductList()
// );
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
// describe('Product List', () => {
//   test('Should render some products when first load', () => {
//     mockUseProductList.mockReturnValue({
//       viewState: {
//         isLoading: false,
//         data: [
//           {
//             id: '998',
//             productName: 'dummy 1',
//           },
//           {
//             id: '999',
//             productName: 'dummy 2',
//           },
//         ],
//         error: null,
//       },
//       onRefresh: jest.fn(),
//       onFetchMore: jest.fn(),
//       onDeleteItem: jest.fn(),
//     });
//   });
//   themeRender(<ProductList />);
//   expect(screen.getAllByA11yHint('product-items').length).toBe(2);
// });

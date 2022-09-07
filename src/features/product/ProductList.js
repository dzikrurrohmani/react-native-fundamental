import { FlatList, View } from 'react-native';
import Item from './components/ProductItem';
import MainContainer from '../../shared/components/MainContainer';
import HeaderPageLabel from '../../shared/components/HeaderPageLabel';
import AppBackground from '../../shared/components/AppBackground';
import { useTheme } from '../../shared/context/ThemeContext';
import useProductList from './UseProductList';

const ProductList = () => {
  const theme = useTheme();
  const { viewState, onRefresh, onFetchMore, onDeleteItem } = useProductList();

  let prevOpenedRow;
  const row = [];

  const renderItem = ({ item, index }) => {
    return (
      <Item
        productName={item.productName}
        idx={index}
        onDelete={() => onDeleteItem(index)}
        refRow={refRows}
        closeRow={() => closeRow(index)}
      />
    );
  };

  const refRows = (index, ref) => {
    row[index] = ref;
  };

  const closeRow = (index) => {
    if (prevOpenedRow && prevOpenedRow !== row[index]) {
      prevOpenedRow.close();
    }
    prevOpenedRow = row[index];
  };
  return (
    <MainContainer>
      <AppBackground>
        <View style={{ margin: theme.spacing.s }}>
          <HeaderPageLabel text="Product" />
          <FlatList
            onRefresh={onRefresh}
            onEndReached={onFetchMore}
            refreshing={viewState.isLoading}
            data={viewState.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </AppBackground>
    </MainContainer>
  );
};
export default ProductList;

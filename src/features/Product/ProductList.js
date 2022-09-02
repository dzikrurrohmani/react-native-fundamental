import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import AppBackground from '../../shared/components/AppBackground';
import { HeaderPageLabel } from '../../shared/components/HeaderPageLabel';
import MainContainer from '../../shared/components/MainContainer';
import { useTheme } from '../../shared/context/ThemeContext';
import { useDependency } from '../../shared/hook/UseDependency';
import Item from './components/ProductItem';

const ProductList = () => {
  const theme = useTheme();
  const { productService } = useDependency();
  const [product, setProduct] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    onGetAllProduct();
  }, []);

  const onGetAllProduct = async () => {
    setIsFetching(true);
    try {
      setProduct([]);
      const response = await productService.getAllProduct();
      setProduct(response);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setIsFetching(false);
    }
  };

  const renderItem = ({ item }) => {
    return <Item productName={item.productName} />;
  };

  return (
    <MainContainer>
      <AppBackground>
        <View style={{ margin: theme.spacing.s }}>
          <HeaderPageLabel text={'Product'} />
          <FlatList
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onRefresh={onGetAllProduct}
            refreshing={isFetching}
          />
        </View>
      </AppBackground>
    </MainContainer>
  );
};

export default ProductList;

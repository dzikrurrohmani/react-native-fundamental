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
  const [page, setPage] = useState(1);
  const [isNext, setIsNext] = useState(true);

  useEffect(() => {
    onGetAllProduct();
  }, [page]);

  const onGetAllProduct = async () => {
    setIsFetching(true);
    try {
      //   setProduct([]);
      //   const response = await productService.getAllProduct();
      //   setProduct(response);
      const response = await productService.getAllProduct(page);
      if (page === 1) {
        setProduct([...response]);
      } else {
        setProduct((prevState) => [...prevState, ...response]);
      }
      setIsFetching(false)
      setIsNext(true)
    } catch (error) {
      console.log('Error', error);
      setIsNext(false)
    } finally {
      setIsFetching(false);
    }
  };

  const onFetchMore = async () => {
    if (isNext){
        setPage(prevState => prevState+1)
    } else {
        onGetAllProduct
    }
  }

  const onRefresh = () => {
    setPage(1)
  }

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
            onRefresh={onRefresh}
            refreshing={isFetching}
            onEndReached={onFetchMore}
          />
        </View>
      </AppBackground>
    </MainContainer>
  );
};

export default ProductList;

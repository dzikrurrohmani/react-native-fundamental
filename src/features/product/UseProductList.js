import { useEffect, useState } from 'react';
import { useDeps } from '../../shared/hook/UseDependency';
import useViewState from '../../shared/hook/UseViewState';

const useProductList = () => {
  const { productService } = useDeps();
  const [page, setPage] = useState(1);
  const [isNext, setIsNext] = useState(true);
  const { setLoading, setData, setError, viewState } = useViewState();

  useEffect(() => {
    onGetAllProduct();
  }, [page]);

  const onGetAllProduct = async () => {
    setLoading(true, false);
    try {
      const response = await productService.getAllProduct(page, 20);
      if (page === 1) {
        setData(response);
      } else {
        const result = [...viewState.data, ...response];
        setData(result);
      }
      setIsNext(true);
    } catch (e) {
      setIsNext(false);
      setError(e, false);
    }
  };
  const onFetchMore = async () => {
    if (isNext) {
      setPage((prevState) => prevState + 1);
    } else {
      await onGetAllProduct();
    }
  };

  const onRefresh = async () => {
    if (page !== 1) {
      setPage((prevState) => prevState + 1);
    } else {
      await onGetAllProduct();
    }
  };

  const onDeleteItem = async (index) => {
    console.log('Delete item', viewState.data[index]);
    await onRefresh()
  };

  return {
    viewState,
    onRefresh,
    onFetchMore,
    onDeleteItem,
  };
};

export default useProductList;

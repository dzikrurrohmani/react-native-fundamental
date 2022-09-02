import { data } from '../data/products';
import { sleep } from '../shared/Sleep';

export const productService = () => {
  const getAllProduct = async () => {
    try {
      return await sleep((resolve, reject) => {
        resolve(data);
      }, 1000);
    } catch (error) {
      throw error;
    }
  };
  return { getAllProduct };
};

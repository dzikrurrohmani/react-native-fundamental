import { productService } from './ProductService';

export const serviceFactory = () => {
  return {
    productService: productService(),
  };
};

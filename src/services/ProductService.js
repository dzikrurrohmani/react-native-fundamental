import { Data } from "../data/product"
import { SERVICE } from "../shared/hook/constant";
import { sleep } from "../shared/sleep"

export const productService = ({doGet}) => {
    const getAllProduct = async (page, itemPerPage) => {
        try {
            const response = await doGet({url: SERVICE.PRODUCT, params: {pageNo: page, itemPerPage: itemPerPage}})
            // console.log('Response Product Service', response);
            const products = response.products;
            // console.log('Products', products);
            if(products.length === 0){
                throw new Error('No More Data');
            } else {
                return products
            }
        } catch (error) {
            throw error;
        }
    }
    return {getAllProduct}
}


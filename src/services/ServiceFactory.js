import { loginService } from "./LoginService"
import { productService } from "./ProductService"

export const serviceFactory = (apiClient) => {
    return {
        productService: productService(apiClient),
        loginService: loginService(apiClient),
    }
}
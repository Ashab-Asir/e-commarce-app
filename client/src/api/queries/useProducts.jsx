import { ProductServices } from "../services";

export function useProducts() {
  const getProducts = async () => {
    const products = await ProductServices.getProducts();
    return products;
  };
  return { getProducts };
}

import axios from 'axios';
import { defineStore } from 'pinia';
import mdlProduct from 'src/core/modals/Product';

export const useProductStore = defineStore('productStore', () => {
  const state = {
    basket: [] as mdlProduct[],
  };

  const productList = async () => {
    const response = await axios.get(`http://localhost:5000/api/product/list`);
    return response.data;
  };

  const productDetail = async (id: string) => {
    const response = await axios.post(
      `http://localhost:5000/api/product/detail`,
      { id }
    );
    return response.data;
  };

  const addBasket = (product: mdlProduct) => {
    state.basket = [...state.basket, product];
  };

  const getBasket = () => {
    return state.basket;
  };

  const removeBasketByProduct = (id: number) => {
    const newBasket = state.basket.filter((i) => i.id !== id);
    state.basket = newBasket;
    return newBasket;
  };

  return {
    productList,
    productDetail,
    addBasket,
    basket: state.basket,
    getBasket,
    removeBasketByProduct,
  };
});

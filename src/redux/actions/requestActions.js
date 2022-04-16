import {
  ADD_FILTER_BRAND,
  CATEGORY_SHOE_BRANDS,
  CLEAR_FILTER_BRANDS,
  DATA_ISLOADING,
  FETCH_SHOES_FAIL,
  FETCH_SHOES_SUCCESS,
  FILTER__PRICE,
  MINMAX__SHOES,
  REMOVE_FILTER_BRAND,
} from "../types/requestTypes";

export const loadingData = () => ({
  type: DATA_ISLOADING,
});
export const fetchShoesData = (cat, data) => ({
  type: FETCH_SHOES_SUCCESS,
  payload: { category: cat, data: data },
});
export const fetchShoesError = (cat, data) => ({
  type: FETCH_SHOES_FAIL,
  payload: { category: cat, data: data },
});

export const fetchShoesBrands = (cat) => ({
  type: CATEGORY_SHOE_BRANDS,
  payload: { category: cat },
});

export const minMax = (cat) => ({
  type: MINMAX__SHOES,
  payload: { category: cat },
});

export const filterPrice = (cat, data) => ({
  type: FILTER__PRICE,
  payload: { category: cat, data: data },
});

export const addBrandToFilter = (data) => ({
  type: ADD_FILTER_BRAND,
  payload: data,
});
export const removeBrandToFilter = (data) => ({
  type: REMOVE_FILTER_BRAND,
  payload: data,
});
export const resetBrandToFilter = () => ({
  type: CLEAR_FILTER_BRANDS,
});
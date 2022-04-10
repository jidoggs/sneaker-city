import {
  ADD_FILTER_BRAND,
  DATA_ISLOADING,
  FETCH_ALL_SHOES_FAIL,
  FETCH_ALL_SHOES_SUCCESS,
  FETCH_BRANDS_FAIL,
  FETCH_BRANDS_SUCCESS,
  FETCH_CHILDREN_SHOES_FAIL,
  FETCH_CHILDREN_SHOES_SUCCESS,
  FETCH_MEN_SHOES_FAIL,
  FETCH_MEN_SHOES_SUCCESS,
  FETCH_WOMEN_SHOES_FAIL,
  FETCH_WOMEN_SHOES_SUCCESS,
  FILTER__PRICE__ALLSHOES,
  FILTER__PRICE__CHILDRENSHOES,
  FILTER__PRICE__MENSHOES,
  FILTER__PRICE__WOMENSHOES,
  MINMAX__ALLSHOES,
  MINMAX__CHILDRENSHOES,
  MINMAX__MENSHOES,
  MINMAX__WOMENSHOES,
  REMOVE_FILTER_BRAND,
} from "../types/requestTypes";

export const loadingData = () => ({
  type: DATA_ISLOADING,
});
export const fetchShoesData = (data) => ({
  type: FETCH_ALL_SHOES_SUCCESS,
  payload: data,
});
export const fetchShoesError = (data) => ({
  type: FETCH_ALL_SHOES_FAIL,
  payload: data,
});
export const fetchMenShoesData = (data) => ({
  type: FETCH_MEN_SHOES_SUCCESS,
  payload: data,
});
export const fetchMenShoesError = (data) => ({
  type: FETCH_MEN_SHOES_FAIL,
  payload: data,
});
export const fetchWomenShoesData = (data) => ({
  type: FETCH_WOMEN_SHOES_SUCCESS,
  payload: data,
});
export const fetchWomenShoesError = (data) => ({
  type: FETCH_WOMEN_SHOES_FAIL,
  payload: data,
});
export const fetchChildrenShoesData = (data) => ({
  type: FETCH_CHILDREN_SHOES_SUCCESS,
  payload: data,
});
export const fetchChildrenShoesError = (data) => ({
  type: FETCH_CHILDREN_SHOES_FAIL,
  payload: data,
});
export const fetchBrandsSuccess = (data) => ({
  type: FETCH_BRANDS_SUCCESS,
  payload: data,
});
export const fetchBrandsError = (data) => ({
  type: FETCH_BRANDS_FAIL,
  payload: data,
});
export const addBrandToFilter = (data) => ({
  type: ADD_FILTER_BRAND,
  payload: data,
});
export const removeBrandToFilter = (data) => ({
  type: REMOVE_FILTER_BRAND,
  payload: data,
});
export const minMaxAll = () => ({
  type: MINMAX__ALLSHOES,
});
export const minMaxMen = () => ({
  type: MINMAX__MENSHOES,
});
export const minMaxWomen = () => ({
  type: MINMAX__WOMENSHOES,
});
export const minMaxChildren = () => ({
  type: MINMAX__CHILDRENSHOES,
});
export const filterQueryAll = (data) => ({ 
  type: FILTER__PRICE__ALLSHOES,
  payload: data
 })
export const filterQueryMen = (data) => ({ 
  type: FILTER__PRICE__MENSHOES,
  payload: data
 })
export const filterQueryWomen = (data) => ({ 
  type: FILTER__PRICE__WOMENSHOES,
  payload: data
 })
export const filterQueryChildren = (data) => ({ 
  type: FILTER__PRICE__CHILDRENSHOES,
  payload: data
 })
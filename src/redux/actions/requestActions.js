import {
  ADD_FILTER_BRAND,
  CHILDRENSHOE_BRANDS,
  CLEAR_FILTER_BRANDS,
  DATA_ISLOADING,
  FETCH_ALL_SHOES_FAIL,
  FETCH_ALL_SHOES_SUCCESS,
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
  MENSHOE_BRANDS,
  MINMAX__ALLSHOES,
  MINMAX__CHILDRENSHOES,
  MINMAX__MENSHOES,
  MINMAX__WOMENSHOES,
  NEWSHOE_BRANDS,
  REMOVE_FILTER_BRAND,
  WOMENSHOE_BRANDS,
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
export const fetchAllShoesBrands = () => ({
  type: NEWSHOE_BRANDS,
});
export const fetchMenShoesBrands = () => ({
  type: MENSHOE_BRANDS,
});
export const fetchWomenShoesBrands = () => ({
  type: WOMENSHOE_BRANDS,
});
export const fetchChildrenShoesBrands = () => ({
  type: CHILDRENSHOE_BRANDS,
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

 export const dispatchFetchSuccess = (pathname, dispatch, data) => { 
  if (pathname === "/products/new") {
        dispatch(fetchShoesData(data))
        dispatch(fetchAllShoesBrands())
        dispatch(minMaxAll())
      }
      if (pathname === "/products/men") {
        dispatch(fetchMenShoesData(data))
        dispatch(fetchMenShoesBrands())
        dispatch(minMaxMen())
      }
      if (pathname === "/products/women") {
        dispatch(fetchWomenShoesData(data))
        dispatch(fetchWomenShoesBrands())
        dispatch(minMaxWomen())
      }
      if (pathname === "/products/kids") {
        dispatch(fetchChildrenShoesData(data))
        dispatch(fetchChildrenShoesBrands())
        dispatch(minMaxChildren())
  }
 }
export const dispatchFetchFailure = (pathname, dispatch, data) => { 
  if (pathname === "/products/new") {
        dispatch(fetchShoesError(data))
  }
  if (pathname === "/products/men") {
        dispatch(fetchMenShoesError(data))
  }
  if (pathname === "/products/women") {
        dispatch(fetchWomenShoesError(data))
  }
  if (pathname === "/products/kids") {
        dispatch(fetchChildrenShoesError(data))
  }
 }
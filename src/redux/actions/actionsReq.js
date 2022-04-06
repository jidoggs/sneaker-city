import { FETCH_SHOES_FAIL, FETCH_SHOES_SUCCESS } from "../types/typesReq";

export const fetchShoesData = (data) => ({
    type: FETCH_SHOES_SUCCESS,
    payload: data,
  });
  export const fetchShoesError = (data) => ({
    type: FETCH_SHOES_FAIL,
    payload: data,
  });
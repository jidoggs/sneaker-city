import { appearOnce, capitalizeEachWord } from "../../helpers";
import {
  ADD_FILTER_BRAND,
  CATEGORY_SHOE_BRANDS,
  CLEAR_FILTER_BRANDS,
  CLEAR__FILTER__PRICE,
  DATA_ISLOADING,
  FETCH_SHOES_FAIL,
  FETCH_SHOES_SUCCESS,
  FILTER__PRICE,
  MINMAX__SHOES,
  REMOVE_FILTER_BRAND,
} from "../types/requestTypes";

const initialState = {
  isLoading: true,
  newShoes: {
    error: null,
    data: [],
    brands:[],
    minMax:{
      min: 0,
      max: 100,
      filter: []
    }
  },
  menShoes: {
    error: null,
    data: [],
    brands:[],
    minMax:{
      min: 0,
      max: 100,
      filter: []
    }
  },
  womenShoes: {
    error: null,
    data: [],
    brands:[],
    minMax:{
      min: 0,
      max: 100,
      filter: []
    }
  },
  childrenShoes: {
    error: null,
    data: [],
    brands:[],
    minMax:{
      min: 0,
      max: 100,
      filter: []
    }
  },
  brandsFilter:[]
};

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case DATA_ISLOADING:
      return {
        ...state,
        isLoading:true,
      };
    case FETCH_SHOES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        [payload.category]:{
          ...state.newShoes,
          error: null,
          data: payload.data
        }
      };
    case FETCH_SHOES_FAIL:
    return {
      ...state,
      isLoading:false,
      [payload.category]:{
        error: payload.data,
        data: []
      }
    };
    case CATEGORY_SHOE_BRANDS:
      return {
        ...state,
        [payload.category]:{
          ...state[payload.category],
          brands: appearOnce(
            state[payload.category].data.map((item) => capitalizeEachWord(item.brand))
          )
        }
      };
    case MINMAX__SHOES:
      return {
        ...state,
        [payload.category]:{
          ...state[payload.category],
          minMax:{
            ...state[payload.category].minMax,
            min: Math.min.apply(null, state[payload.category].data.map(shoe => shoe.retailPrice)),
            max: Math.max.apply(null, state[payload.category].data.map(shoe => shoe.retailPrice))
          }
        }
      };
    case FILTER__PRICE:
      return {
        ...state,
        [payload.category]:{
          ...state[payload.category],
          minMax:{
            ...state[payload.category].minMax,
            filter: payload.data
          }
        }
      };
    case CLEAR__FILTER__PRICE:
      return {
        ...state,
        [payload.category]:{
          ...state[payload.category],
          minMax:{
            ...state[payload.category].minMax,
            filter: []
          }
        }
      };
    case ADD_FILTER_BRAND:
      return {
        ...state,
        brandsFilter:[...state.brandsFilter, payload]
      };
    case REMOVE_FILTER_BRAND:
      return {
        ...state,
        brandsFilter:state.brandsFilter.filter(selectItem => selectItem !== payload) ,
        
      };
    case CLEAR_FILTER_BRANDS:
      return {
        ...state,
        brandsFilter:[]
      };
    

    default:
      return state;
  }
}

import { appearOnce, capitalizeEachWord } from "../../helpers";
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
    case FETCH_ALL_SHOES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        newShoes:{
          ...state.newShoes,
          error: null,
          data: payload
        }
      };
    case FETCH_ALL_SHOES_FAIL:
      return {
        ...state,
        isLoading:false,
        newShoes:{
          error: payload,
          data: []
        }
      };
    case NEWSHOE_BRANDS:
      return {
        ...state,
        newShoes:{
          ...state.newShoes,
          brands: appearOnce(
            state.newShoes.data.map((item) => capitalizeEachWord(item.brand))
          )
        }
      };
    case MINMAX__ALLSHOES:
      return {
        ...state,
        newShoes:{
          ...state.newShoes,
          minMax:{
            ...state.newShoes.minMax,
            min: Math.min.apply(null, state.newShoes.data.map(shoe => shoe.retailPrice)),
            max: Math.max.apply(null, state.newShoes.data.map(shoe => shoe.retailPrice))
          }
        }
      };
    case FILTER__PRICE__ALLSHOES:
      return {
        ...state,
        newShoes:{
          ...state.newShoes,
          minMax:{
            ...state.newShoes.minMax,
            filter: payload
          }
        }
      };
    case FETCH_MEN_SHOES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        menShoes:{
          ...state.menShoes,
          error: null,
          data: payload
        }
      };
    case FETCH_MEN_SHOES_FAIL:
      return {
        ...state,
        isLoading:false,
        menShoes:{
          error: payload,
          data: []
        }
      };
    case MENSHOE_BRANDS:
      return {
        ...state,
        menShoes:{
          ...state.menShoes,
          brands: appearOnce(
            state.menShoes.data.map((item) => capitalizeEachWord(item.brand))
          )
        }
      };
    case MINMAX__MENSHOES:
    return {
      ...state,
      menShoes:{
        ...state.menShoes,
        minMax:{
          ...state.menShoes.minMax,
          min: Math.min.apply(null, state.menShoes.data.map(shoe => shoe.retailPrice)),
          max: Math.max.apply(null, state.menShoes.data.map(shoe => shoe.retailPrice))
        }
      }
    };
    case FILTER__PRICE__MENSHOES:
    return {
      ...state,
      menShoes:{
        ...state.menShoes,
        minMax:{
          ...state.menShoes.minMax,
          filter: payload
        }
      }
    };
    case FETCH_WOMEN_SHOES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        womenShoes:{
          ...state.womenShoes,
          error: null,
          data: payload
        }
      };
    case FETCH_WOMEN_SHOES_FAIL:
      return {
        ...state,
        isLoading:false,
        womenShoes:{
          ...state.womenShoes,
          error: payload,
          data: []
        }
      };

    case WOMENSHOE_BRANDS:
      return {
        ...state,
        womenShoes:{
          ...state.womenShoes,
          brands: appearOnce(
            state.womenShoes.data.map((item) => capitalizeEachWord(item.brand))
          )
        }
      };
      case MINMAX__WOMENSHOES:
      return {
        ...state,
        womenShoes:{
          ...state.womenShoes,
          minMax:{
            ...state.womenShoes.minMax,
            min: Math.min.apply(null, state.womenShoes.data.map(shoe => shoe.retailPrice)),
            max: Math.max.apply(null, state.womenShoes.data.map(shoe => shoe.retailPrice))
          }
        }
      };
      case FILTER__PRICE__WOMENSHOES:
      return {
        ...state,
        womenShoes:{
          ...state.womenShoes,
          minMax:{
            ...state.womenShoes.minMax,
            filter: payload
          }
        }
      };
    case FETCH_CHILDREN_SHOES_SUCCESS:
      return {
        ...state,
        isLoading:false,
        childrenShoes:{
          ...state.childrenShoes,
          error: null,
          data: payload
        }
      };
    case FETCH_CHILDREN_SHOES_FAIL:
      return {
        ...state,
        isLoading:false,
        childrenShoes:{
          error: payload,
          data: []
        }
      };
    case CHILDRENSHOE_BRANDS:
      return {
        ...state,
        childrenShoes:{
          ...state.childrenShoes,
          brands: appearOnce(
            state.childrenShoes.data.map((item) => capitalizeEachWord(item.brand))
          )
        }
      };
      case MINMAX__CHILDRENSHOES:
      return {
        ...state,
        childrenShoes:{
          ...state.childrenShoes,
          minMax:{
            ...state.childrenShoes.minMax,
            min: Math.min.apply(null, state.childrenShoes.data.map(shoe => shoe.retailPrice)),
            max: Math.max.apply(null, state.childrenShoes.data.map(shoe => shoe.retailPrice))
          }
        }
      };
      case FILTER__PRICE__CHILDRENSHOES:
      return {
        ...state,
        childrenShoes:{
          ...state.childrenShoes,
          minMax:{
            ...state.childrenShoes.minMax,
            filter: payload
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

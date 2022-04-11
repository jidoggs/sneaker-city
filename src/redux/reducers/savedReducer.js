import { ADD__SAVED, REMOVED__SAVED, RESET__SAVED } from "../types/savedTypes";

  
  const initialState = {
    savedItems: [],
  };
  
  export default function savedReducer(state = initialState, { type, payload }) {
    switch (type) {
      case ADD__SAVED:
        return {...state, savedItems: [...state.savedItems, payload] };
      case REMOVED__SAVED:
        return {
          ...state,
          savedItems: state.savedItems.filter((savedItem) => savedItem.id !== payload.id),
        };
      
      case RESET__SAVED:
        return initialState;
  
      default:
        return state;
    }
  }
  
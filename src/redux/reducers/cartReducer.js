import {
  ADD_TO_CART,
  DECREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT,
  REMOVE_FROM_CART,
  RESET_CART,
  SUB_TOTAL,
  UPDATE_ITEM,
} from "../types/cartTypes";

const initialState = {
  cart: [],
  cartItemsTotal: 0,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };
    case UPDATE_ITEM:
      return {
        ...state,
        cart: state.cart.map((cartItem, i) =>
          cartItem.id === payload.id
            ? { ...cartItem, amount: payload.count , shoeSize: payload.shoeSize }
            : cartItem
        ),
      };
    case INCREASE_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem, i) =>
          cartItem.id === payload.id
            ? { ...cartItem, amount: (payload.count += 1) }
            : cartItem
        ),
      };
    case DECREASE_ITEM_COUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem, i) =>
          cartItem.id === payload.id
            ? { ...cartItem, amount: (payload.count -= 1) }
            : cartItem
        ),
      };

    case SUB_TOTAL:
      return {
        ...state,
        cartItemsTotal: state.cart
          .map((cartItem) => Math.ceil(cartItem.retailPrice * cartItem.amount))
          .reduce((prev, current) => prev + current, 0),
      };
    case RESET_CART:
      return initialState;

    default:
      return state;
  }
}

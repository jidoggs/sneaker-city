import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  SUB_TOTAL,
} from "../types/typesCart";

export const cartAddItem = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});
export const cartRemoveItem = (data) => ({
  type: REMOVE_FROM_CART,
  payload: data,
});
export const increaseCartItemCount = (data) => ({
  type: INCREASE_ITEM_COUNT,
  payload: data,
});
export const decreaseCartItemCount = (data) => ({
  type: DECREASE_ITEM_COUNT,
  payload: data,
});
export const subTotal = () => ({
  type: SUB_TOTAL,
});

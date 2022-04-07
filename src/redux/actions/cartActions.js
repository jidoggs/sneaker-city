import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT,
  SUB_TOTAL,
  RESET_CART,
  UPDATE_ITEM,
} from "../types/cartTypes";

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
export const resetCart = () => ({
  type: RESET_CART,
});
export const updateCartItem = (data) => ({
  type: UPDATE_ITEM,
  payload: data
});

import { ADD__SAVED, REMOVED__SAVED, RESET__SAVED } from "../types/savedTypes";

export const saveItem = (data) => ({
  type: ADD__SAVED,
  payload: data,
});
export const removeItem = (data) => ({
  type: REMOVED__SAVED,
  payload: data,
});
export const clearAllItems = (data) => ({
  type: RESET__SAVED,
});

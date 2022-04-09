import { HIDE_MODAL, SHOW_MODAL } from "../types/modalTypes";

export const showModal = (data) => ({
    type: SHOW_MODAL,
    payload: data,
  });
  export const hideModal = () => ({
    type: HIDE_MODAL,
  });
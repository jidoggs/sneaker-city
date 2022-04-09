import { HIDE_MODAL, SHOW_MODAL } from "../types/modalTypes";

const initialState = {
  showModal: false,
  message:"",
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_MODAL:
      return { showModal: true, message: payload };
    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

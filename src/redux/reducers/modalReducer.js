import { HIDE_MODAL, SHOW_MODAL } from "../types/modalTypes";

const initialState = {
  showModal: false,
};

export default function modalReducer(state = initialState, { type }) {
  switch (type) {
    case SHOW_MODAL:
      return { showModal: true };
    case HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

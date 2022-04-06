import { FETCH_SHOES_FAIL, FETCH_SHOES_SUCCESS, FOR_KIDS, FOR_MEN, FOR_WOMEN, NEW_ARRIVAL } from "../types/requestTypes";

const initialState = {
  isLoading: true,
  error: null,
  data: [],
};

export default function appReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SHOES_SUCCESS:
      return {
        data: [...payload],
        error: null,
        isLoading: false,
      };
    case FETCH_SHOES_FAIL:
      return {
        data: [],
        error: payload,
        isLoading: false,
      };
    case NEW_ARRIVAL:
      return {
        ...state,
        data: state.data.filter(
          (shoe) => shoe?.year === new Date().getFullYear()
        ),
      };
    case FOR_WOMEN:
      return {
        ...state,
        data: state.data.filter((shoe) => shoe?.gender === "women"),
      };
    case FOR_KIDS:
      return {
        ...state,
        data: state.data.filter((shoe) => shoe?.gender === "child"),
      };
    case FOR_MEN:
      return {
        ...state,
        data: state.data.filter((shoe) => shoe?.gender === "men"),
      };

    default:
      return state;
  }
}

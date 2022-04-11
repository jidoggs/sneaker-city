import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";
import appReducer from "./requestReducer";
import savedReducer from "./savedReducer";

const rootReducer = combineReducers({
  cartReducer: cartReducer,
  networkRequestReducer: appReducer,
  modalReducer: modalReducer,
  savedReducer: savedReducer,
});
export default rootReducer;

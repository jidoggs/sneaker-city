// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../reducers/modalReducer";
import cartReducer from "../reducers/cartReducer";
import appReducer from "../reducers/requestReducer";

// let middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = configureStore({
  reducer: {
    cartReducer: cartReducer,
    networkRequestReducer: appReducer,
    modalReducer: modalReducer,
  },
});

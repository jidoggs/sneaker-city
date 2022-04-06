// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../reducers/modalReducer';
import cartReducer from '../reducers/reducerCart';
import appReducer from "../reducers/reducerReq";

// let middlewares = [thunk];

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = configureStore({
  reducer: {
    cartR: cartReducer,
    appR: appReducer,
    modalReducer: modalReducer,
  },
  // middleware: [thunk, logger],
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     thunk: {
  //       extraArgument: myCustomApiService,
  //     },
  //     serializableCheck: false,
  //   }),
});

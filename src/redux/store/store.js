import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/reducerCart';

export const store = configureStore({
  reducer: {
    cartR: cartReducer
  },
});

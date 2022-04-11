import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "savedItems",
  storage: storage,
  whitelist: ["savedReducer"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore(
  { reducer: persistedReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: ['persist/PERSIST','persist/REHYDRATE'],
      // Ignore these field paths in all actions
      // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      // ignoredPaths: ['items.dates'],
    },
  }), },
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
);

export let persistor = persistStore(store);

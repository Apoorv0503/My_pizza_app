import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  preloadedState: initialState,
});

export default store;

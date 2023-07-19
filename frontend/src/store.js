import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import { apiSlice } from './slices/apiSlice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getMiddlewareDefaults =>
    getMiddlewareDefaults().concat(apiSlice.middleware),
  devTools: true,
});

export default store;

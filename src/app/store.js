import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/product';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      value: products,
    },
    reducers: {
      update_product: (state, action) => {
        state.value = action.payload;
      },
    },
});
  
export const { update_product } = productSlice.actions;
  
export default productSlice.reducer;
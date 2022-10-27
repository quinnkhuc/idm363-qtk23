import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      value: products,
    },
    reducers: {
      update_product_name: (state, action) => {
        const itemIndex = state.value.findIndex((item) => item.id === action.payload.id)

        state.value[itemIndex] = {
          ...state.value[itemIndex],
          name: action.payload.updated_name
        }
      },
      update_product_price: (state, action) => {
        const itemIndex = state.value.findIndex((item) => item.id === action.payload.id)

        state.value[itemIndex] = {
          ...state.value[itemIndex],
          price: action.payload.updated_price
        }
      }
    }
});
  
export const { update_product_name, update_product_price } = productSlice.actions;
  
export default productSlice.reducer;
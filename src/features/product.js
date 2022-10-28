import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
      value: [],
    },
    reducers: {
      initialize_store: (state, action) => {
        state.value = action.payload
      },
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
  
export const { initialize_store, update_product_name, update_product_price } = productSlice.actions;
  
export default productSlice.reducer;
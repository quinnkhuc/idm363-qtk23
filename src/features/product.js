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
      update_product: (state, action) => {
        const itemIndex = state.value.findIndex((item) => item.id === action.payload.id)

        state.value[itemIndex] = {
          ...state.value[itemIndex],
          name: action.payload.name,
          price: action.payload.price
        }
      }
    }
});
  
export const { initialize_store, update_product } = productSlice.actions;
  
export default productSlice.reducer;
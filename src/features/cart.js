import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      value: initialStateValue,
    },
    reducers: {
      update_cart: (state, action) => {
        state.value = action.payload;
      },
    },
});
  
export const { update_cart } = cartSlice.actions;
  
export default cartSlice.reducer;
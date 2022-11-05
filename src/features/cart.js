import { createSlice } from '@reduxjs/toolkit';


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      value: []
    },
    reducers: {
      update_cart_item: (state, action) => {
        const itemIndex = state.value.findIndex(item => item.id === action.payload.id)

        if(itemIndex >= 0){
          state.value[itemIndex] = {
            ...state.value[itemIndex],
            name: action.payload.name,
            price: action.payload.price
          }
        }
      },
      add_to_cart: (state, action) => {
        const itemInCart = state.value.find((item) => item.id === action.payload.id)

        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.value.push({ ...action.payload, quantity: 1 });
        }
      },
      remove_from_cart: (state, action) => {
        const removeItem = state.value.filter((item) => item.id !== action.payload);
        state.value = removeItem;
      }
    },
});
  
export const { update_cart_item, add_to_cart, remove_from_cart } = cartSlice.actions;
  
export default cartSlice.reducer;
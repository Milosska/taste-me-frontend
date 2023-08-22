import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "shopping_cart",
  initialState: [],
  reducers: {
    addItemToCart(state, action) {
      return (state = [...state, action.payload]);
    },
    removeItemFromCart(state, action) {
      return state.filter((item) => item._id !== action.payload._id);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = slice.actions;
export const shoppingCartReducer = slice.reducer;

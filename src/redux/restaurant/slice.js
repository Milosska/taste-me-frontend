import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "current_restaurant",
  initialState: "McDonald's",
  reducers: {
    setRestaurant(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setRestaurant } = slice.actions;
export const restaurantReducer = slice.reducer;

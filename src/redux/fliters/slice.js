import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    cathegory: null,
  },
  reducers: {
    setCathegory(state, action) {
      return (state = { ...state, cathegory: action.payload });
    },
  },
});

export const { setCathegory } = slice.actions;
export const filtersReducer = slice.reducer;

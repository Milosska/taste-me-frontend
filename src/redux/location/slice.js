import { createSlice } from "@reduxjs/toolkit";
import { fetchLocation } from "./operations";

const slice = createSlice({
  name: "location",
  initialState: {
    currentLocation: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.currentLocation = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchLocation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.isLoading = false;
        console.error(action.payload);
      });
  },
});

export const locationReducer = slice.reducer;

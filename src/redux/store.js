import { configureStore } from "@reduxjs/toolkit";
import { locationReducer } from "./location/slice";
import { restaurantReducer } from "./restaurant/slice";
import { filtersReducer } from "./fliters/slice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    current_restaurant: restaurantReducer,
    filters: filtersReducer,
  },
});

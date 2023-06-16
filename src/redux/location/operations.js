import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async (geoLocation, { rejectWithValue }) => {
    const { VITE_OPENCAGE_GEOCODING_API_KEY } = import.meta.env;
    const { latitude, longitude } = geoLocation;

    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=en&key=${VITE_OPENCAGE_GEOCODING_API_KEY}`
      );

      return response.data.results[0].formatted;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

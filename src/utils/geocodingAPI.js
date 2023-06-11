import axios from "axios";

export const fetchAddress = async (geoLocation) => {
  const { VITE_OPENCAGE_GEOCODING_API_KEY } = import.meta.env;
  const { latitude, longitude } = geoLocation;

  try {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&language=en&key=${VITE_OPENCAGE_GEOCODING_API_KEY}`
    );

    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    console.error(e);
  }
};

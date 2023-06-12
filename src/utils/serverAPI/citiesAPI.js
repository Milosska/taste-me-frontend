import axios from "axios";

const { VITE_SERVER_BASE_URI } = import.meta.env;

export const fetchCities = async () => {
  try {
    const response = await axios.get(`${VITE_SERVER_BASE_URI}/api/cities`);
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      return;
    }
    console.error(e);
  }
};

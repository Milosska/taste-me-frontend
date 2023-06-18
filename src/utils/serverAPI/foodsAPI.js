import axios from "axios";

const { VITE_SERVER_BASE_URI } = import.meta.env;

export const fetchFoodsByRestaurant = async (
  restaurantName,
  page,
  limit,
  controllerSignal
) => {
  try {
    const response = await axios.get(
      `${VITE_SERVER_BASE_URI}/api/foods/${restaurantName}`,
      {
        params: { page, limit },
        signal: controllerSignal,
      }
    );
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      console.log("Request is canceled");
      return;
    }
    console.error(e);
  }
};

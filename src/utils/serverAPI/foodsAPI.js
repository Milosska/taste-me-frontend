import axios from "axios";
import { toast } from "react-toastify";

const { VITE_SERVER_BASE_URI } = import.meta.env;

export const fetchFoodsByRestaurant = async (
  restaurantName,
  page,
  limit,
  controllerSignal,
  type
) => {
  try {
    const response = await axios.get(
      `${VITE_SERVER_BASE_URI}/api/foods/${restaurantName}`,
      {
        params: { page, limit, type },
        signal: controllerSignal,
      }
    );

    if (page === 1) {
      toast.success(`${response.data.totalCount} results are found!`);
    }
    return response.data;
  } catch (e) {
    if (axios.isCancel(e)) {
      console.log("Request is canceled");
      return;
    }

    toast.error(e.response.data.message);
    console.error(e);
  }
};

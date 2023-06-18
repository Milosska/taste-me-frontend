import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { current_restaurant } from "src/redux/restaurant/selectors";
import { fetchFoodsByRestaurant } from "src/utils/serverAPI/foodsAPI";

import { ProductCard } from "../ProductCard/ProductCard";
import { Loader } from "src/components/Loader/GlobalLoader/Loader";
import { List } from "./ProductList.styled";

export const ProductList = () => {
  const [foods, setFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const restaurant = useSelector(current_restaurant);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);

    const selectedRestaurant = restaurant ? restaurant : "McDonald's";
    fetchFoodsByRestaurant(selectedRestaurant)
      .then((res) => {
        setFoods(res);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();
    };
  }, [restaurant]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <List>
          {foods.map((food) => {
            return <ProductCard key={food._id} food={food} />;
          })}
        </List>
      )}
    </>
  );
};

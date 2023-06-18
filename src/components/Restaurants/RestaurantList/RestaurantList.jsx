import PropTypes from "prop-types";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { List, ObserverDiv } from "./RestaurantList.styled";

export const RestaurantList = ({ restaurants, isLoading, observerRef }) => {
  return (
    <>
      <List>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            restaurant={restaurant}
            isLoading={isLoading}
          />
        ))}
        <ObserverDiv ref={observerRef}></ObserverDiv>
      </List>
    </>
  );
};

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  observerRef: PropTypes.object,
};

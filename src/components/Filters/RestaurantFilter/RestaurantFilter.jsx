// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurant } from "src/redux/restaurant/slice";
import { current_restaurant } from "src/redux/restaurant/selectors";

import { restaurantOptions } from "src/assets/data/restaurants";
import { Container, Title, List, Item } from "./RestaurantFilter.styled";

export const RestaurantFilter = () => {
  const currentRestaurant = useSelector(current_restaurant);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setRestaurant(e.target.textContent));
  };

  return (
    <Container>
      <Title>Restaurant</Title>
      <List>
        {restaurantOptions.map((option, index) => (
          <Item
            key={index}
            onClick={handleClick}
            choosedOption={currentRestaurant}
          >
            {option}
          </Item>
        ))}
      </List>
    </Container>
  );
};

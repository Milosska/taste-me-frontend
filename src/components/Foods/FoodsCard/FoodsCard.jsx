import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "src/redux/shoppingCart/slice";

import { FaDollarSign, FaPlus, FaMinus } from "react-icons/fa";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { FoodsCardPaleceholder } from "src/components/Loader/Placeholders/FoodsCardPlaceholder/FoodsCardPlaceholder";

import {
  Container,
  PhotoThumb,
  Title,
  FoodDataThumb,
  Type,
  Cuisine,
  Price,
  BtnThumb,
  AddFoodBtn,
} from "./FoodsCard.styled";

export const FoodsCard = ({ food, isLoading, isInCart }) => {
  const { VITE_CLOUDINARY_BASE_URI } = import.meta.env;
  const [isAdded, setIsAdded] = useState(isInCart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAdded) {
      dispatch(addItemToCart(food));
    }

    if (isAdded === false) {
      dispatch(removeItemFromCart(food));
    }
  }, [isAdded, dispatch, food]);

  const handleClick = () => {
    isAdded ? setIsAdded(false) : setIsAdded(true);
  };

  return (
    <ReactPlaceholder
      showLoadingAnimation
      customPlaceholder={FoodsCardPaleceholder}
      ready={!isLoading}
    >
      <Container>
        <PhotoThumb img={`${VITE_CLOUDINARY_BASE_URI}${food.imgURL}`} />
        <Title>{food.name}</Title>
        <FoodDataThumb>
          <Type>{food.type}</Type>
          {food.cuisine && <Cuisine>{food.cuisine}</Cuisine>}
          <Price>
            <FaDollarSign />
            {food.price}
          </Price>
          <BtnThumb>
            <AddFoodBtn type="button" onClick={handleClick} isAdded={isAdded}>
              {isAdded ? <FaMinus /> : <FaPlus />}
            </AddFoodBtn>
          </BtnThumb>
        </FoodDataThumb>
      </Container>
    </ReactPlaceholder>
  );
};

FoodsCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  isInCart: PropTypes.oneOf([null, true]),
};

import PropTypes from "prop-types";
import { FaDollarSign, FaPlus } from "react-icons/fa";

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

export const FoodsCard = ({
  food: { name, imgURL, price, type, cuisine },
  isLoading,
}) => {
  const { VITE_CLOUDINARY_BASE_URI } = import.meta.env;

  return (
    <ReactPlaceholder
      showLoadingAnimation
      customPlaceholder={FoodsCardPaleceholder}
      ready={!isLoading}
    >
      <Container>
        <PhotoThumb img={`${VITE_CLOUDINARY_BASE_URI}${imgURL}`} />
        <Title>{name}</Title>
        <FoodDataThumb>
          <Type>{type}</Type>
          {cuisine && <Cuisine>{cuisine}</Cuisine>}
          <Price>
            <FaDollarSign />
            {price}
          </Price>
          <BtnThumb>
            <AddFoodBtn type="button">
              <FaPlus />
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
};

import PropTypes from "prop-types";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import {
  Container,
  PhotoThumb,
  Title,
  FoodDataThumb,
  Type,
  Cuisine,
  Price,
  AddFoodBtn,
} from "./ProductCard.styled";

export const ProductCard = ({
  food: { name, imgURL, price, type, cuisine },
}) => {
  const { VITE_CLOUDINARY_BASE_URI } = import.meta.env;

  return (
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
        <AddFoodBtn type="button">
          <FaPlus />
        </AddFoodBtn>
      </FoodDataThumb>
    </Container>
  );
};

ProductCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};

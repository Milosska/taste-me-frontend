import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "src/redux/shoppingCart/slice";

import { FaWindowClose, FaPlus, FaMinus } from "react-icons/fa";
import {
  Container,
  RemoveBtn,
  ItemImg,
  Title,
  QuantityThumb,
  QuantityBtn,
  Price,
} from "./ShoppingCartItem.styled";

export const ShoppingCartItem = ({ item }) => {
  const { VITE_CLOUDINARY_BASE_URI } = import.meta.env;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItemFromCart(item));
  };

  const handleIncrement = () => {
    if (quantity >= 20) {
      return;
    }
    setQuantity((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity((prevState) => prevState - 1);
  };

  const handleInputChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <Container>
      <RemoveBtn onClick={handleRemove}>
        <FaWindowClose />
      </RemoveBtn>
      <ItemImg
        src={`${VITE_CLOUDINARY_BASE_URI}${item.imgURL}`}
        alt={item.name}
      />
      <Title>
        {item.name.length > 30 ? `${item.name.slice(0, 30)}...` : item.name}
      </Title>
      <QuantityThumb>
        <QuantityBtn onClick={handleDecrement}>
          <FaMinus />
        </QuantityBtn>
        <input
          type="number"
          name="quantity"
          min="0"
          max="20"
          step="1"
          value={quantity}
          onChange={handleInputChange}
        />
        <QuantityBtn onClick={handleIncrement}>
          <FaPlus />
        </QuantityBtn>
      </QuantityThumb>
      <Price>{`Total: $${
        Math.round(item.price * quantity * 100) / 100
      }`}</Price>
    </Container>
  );
};

ShoppingCartItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imgURL: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cuisine: PropTypes.string,
  }),
};

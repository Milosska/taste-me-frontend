import { useSelector } from "react-redux";
import { shopping_cart } from "src/redux/shoppingCart/selectors";

import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { Container, Title } from "./ShoppingCart.styled";

export const ShoppingCart = () => {
  const currentOrder = useSelector(shopping_cart);

  return (
    <Container>
      <Title>Current order</Title>
      <ul>
        {currentOrder.map((item) => (
          <ShoppingCartItem key={item._id} item={item} />
        ))}
      </ul>
    </Container>
  );
};

import { ShoppingCartItem } from "../ShoppingCartItem/ShoppingCartItem";
import { Container, Title } from "./ShoppingCart.styled";

export const ShoppingCart = () => {
  return (
    <Container>
      <Title>Current order</Title>
      <ul>
        <ShoppingCartItem />
      </ul>
    </Container>
  );
};

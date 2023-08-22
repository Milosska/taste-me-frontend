import { FoodsList } from "src/components/Foods/FoodsList/FoodsList.jsx";
import { RestaurantFilter } from "src/components/Filters/RestaurantFilter/RestaurantFilter.jsx";
import { FoodCathegoryFilter } from "src/components/Filters/FoodCathegoryFilter/FoodCathegoryFilter.jsx";
import { AddressForm } from "src/components/Order/AddressForm/AddressForm.jsx";
import { ShoppingCart } from "src/components/Order/ShoppingCart/ShoppingCart.jsx";
import { Button } from "src/components/Button/Button";
import {
  Container,
  MainSection,
  SideSection,
  Filters,
  AccountThumb,
  AccountLink,
} from "./OrderPage.styled.jsx";

const OrderPage = () => {
  return (
    <>
      <Container>
        <SideSection>
          <AccountThumb>
            <p>Do not have an account?</p>
            <AccountLink to="/signup">Create</AccountLink>
          </AccountThumb>
          <AddressForm />
          <ShoppingCart />
          <Button text="Submit" color="primary" type="submit" />
        </SideSection>
        <MainSection>
          <Filters>
            <RestaurantFilter />
            <FoodCathegoryFilter />
          </Filters>
          <FoodsList />
        </MainSection>
      </Container>
    </>
  );
};

export default OrderPage;

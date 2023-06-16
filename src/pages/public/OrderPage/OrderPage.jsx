import { OrderForm } from "src/components/Order/OrderForm/OrderForm.jsx";
import { Button } from "src/components/Button/Button";
import {
  Container,
  MainSection,
  SideSection,
  AccountThumb,
  AccountLink,
  CurrentOrderSection,
  CurrentOrderTitle,
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
          <OrderForm />
          <CurrentOrderSection>
            <CurrentOrderTitle>Current order</CurrentOrderTitle>
          </CurrentOrderSection>
          <Button text="Submit" color="primary" type="submit" />
        </SideSection>
        <MainSection>
          {/* <div>
            <p>Restaurant</p>
            <ul>
              <li>Logo</li>
            </ul>
          </div> */}
          {/* <div>
            <p>Cathegory</p>
            <ul>
              <li>Icon</li>
            </ul>
          </div> */}
        </MainSection>
      </Container>
    </>
  );
};

export default OrderPage;

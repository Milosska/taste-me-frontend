import {
  GiHamburger,
  GiPizzaSlice,
  GiSushis,
  GiSandwich,
  GiChickenLeg,
  GiBerriesBowl,
  GiCookingPot,
  GiBoba,
  GiDonut,
  GiEmptyMetalBucket,
  GiFrenchFries,
} from "react-icons/gi";
import { Container, Title, List, Item } from "./FoodCathegoryFilter.styled";

export const FoodCathegoryFilter = () => {
  return (
    <Container>
      <Title>Cathegories</Title>
      <List>
        <Item>
          <GiHamburger />
          <p>burger</p>
        </Item>
        <Item>
          <GiPizzaSlice />
          <p>pizza</p>
        </Item>
        <Item>
          <GiSushis />
          <p>sushi</p>
        </Item>
        <Item>
          <GiSandwich />
          <p>sandwich</p>
        </Item>
        <Item>
          <GiChickenLeg />
          <p>chicken</p>
        </Item>
        <Item>
          <GiBerriesBowl />
          <p>salad</p>
        </Item>
        <Item>
          <GiCookingPot />
          <p>soup</p>
        </Item>
        <Item>
          <GiDonut />
          <p>dessert</p>
        </Item>
        <Item>
          <GiBoba />
          <p>beverage</p>
        </Item>
        <Item>
          <GiEmptyMetalBucket />
          <p>sauce</p>
        </Item>
        <Item>
          <GiFrenchFries />
          <p>other</p>
        </Item>
      </List>
    </Container>
  );
};

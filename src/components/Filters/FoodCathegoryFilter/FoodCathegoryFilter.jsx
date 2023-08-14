import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCathegory } from "../../../redux/fliters/slice";
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
  const [choosedFilter, setChoosedFilter] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCathegory(choosedFilter));
  }, [choosedFilter, dispatch]);

  const handleClick = (e) => {
    const currentFilter = e.currentTarget.querySelector("p").textContent;

    if (choosedFilter === currentFilter) {
      setChoosedFilter(null);
      return;
    }

    setChoosedFilter(currentFilter);
  };

  return (
    <Container>
      <Title>Cathegories</Title>
      <List>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiHamburger />
          <p>burger</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiPizzaSlice />
          <p>pizza</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiSushis />
          <p>sushi</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiSandwich />
          <p>sandwich</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiChickenLeg />
          <p>chicken</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiBerriesBowl />
          <p>salad</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiCookingPot />
          <p>soup</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiDonut />
          <p>dessert</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiBoba />
          <p>beverage</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiEmptyMetalBucket />
          <p>sauce</p>
        </Item>
        <Item onClick={handleClick} choosedFilter={choosedFilter}>
          <GiFrenchFries />
          <p>other</p>
        </Item>
      </List>
    </Container>
  );
};

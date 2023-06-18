import { TextRow, RectShape } from "react-placeholder/lib/placeholders";

import {
  Container,
  PhotoThumb,
  Title,
  FoodDataThumb,
  Type,
  Cuisine,
  Price,
  AddFoodBtn,
} from "./FoodsCardPlaceholder.styled";

export const FoodsCardPaleceholder = (
  <Container>
    <RectShape color="lightgrey" style={PhotoThumb} />
    <TextRow color="lightgrey" style={Title} />
    <FoodDataThumb>
      <TextRow color="lightgrey" style={Type} />
      <TextRow color="lightgrey" style={Cuisine} />
      <TextRow color="lightgrey" style={Price} />
      <RectShape color="lightgrey" style={AddFoodBtn} />
    </FoodDataThumb>
  </Container>
);

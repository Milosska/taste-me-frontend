import { TextRow, RectShape } from "react-placeholder/lib/placeholders";

import {
  Container,
  PhotoThumb,
  LogoThumb,
  LogoImg,
  Rating,
  OpenLabel,
} from "./RestaurantCardPlaceholder.styled.";

export const RestaurantCardPaleceholder = (
  <Container>
    <RectShape color="lightgrey" style={PhotoThumb} />
    <LogoThumb>
      <RectShape color="lightgrey" style={LogoImg} />
      <TextRow color="lightgrey" style={Rating} />
      <TextRow color="lightgrey" style={Rating} />
    </LogoThumb>
    <TextRow color="lightgrey" style={OpenLabel} />
  </Container>
);

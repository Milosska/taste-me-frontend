import styled from "styled-components";
import { StyledBtn } from "src/components/Button/Button.styled";

export const StyledSection = styled.section`
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const RestaurantsHeadline = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.12;
  color: #000000;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const MoreBtn = styled(StyledBtn)`
  display: flex;
  align-items: center;
  margin-top: 15px;
  background-color: #ffb30e;

  font-size: 20px;

  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  > svg {
    width: 25px;
    height: 25px;
    transform: rotate(270deg);
  }

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(205, 47, 47, 0.24),
      0px 25px 40px rgba(97, 3, 11, 0.27);
  }
`;

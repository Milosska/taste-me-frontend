import styled from "styled-components";
import { StyledBtn } from "../../Button/Button.styled";

export const Container = styled.div`
  position: relative;
`;

export const List = styled.ul`
  font-size: 16px;
  margin: 0;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;

    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
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

export const ObserverDiv = styled.div`
  position: absolute;
  bottom: 80px;
  z-index: -1;
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    bottom: 60px;
  }
`;

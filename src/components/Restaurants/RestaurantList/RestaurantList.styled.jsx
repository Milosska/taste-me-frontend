import styled from "styled-components";

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

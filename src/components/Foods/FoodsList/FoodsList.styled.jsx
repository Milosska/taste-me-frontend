import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding: 0 20px;

  @media screen and (min-width: 1200px) {
    padding: 0 15px 0 40px;
  }
`;

export const List = styled.ul`
  font-size: 16px;
  margin: 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ObserverDiv = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 150px;
`;

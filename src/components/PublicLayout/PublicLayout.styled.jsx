import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 0 20px;
  border: 2px solid red;

  @media screen and (min-width: 765px) {
    padding: 0 40px;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 0 20px;

  @media screen and (min-width: 765px) {
    padding: 0 40px;
  }
`;

export const Footer = styled.footer`
  padding: 0 20px;

  @media screen and (min-width: 765px) {
    padding: 0 40px;
  }
`;

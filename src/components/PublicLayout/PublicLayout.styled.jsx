import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 0 20px;

  @media screen and (min-width: 765px) {
    padding: 0 40px;
  }
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  padding: 0 20px;
  background-color: #212121;
  color: #ffffff;

  @media screen and (min-width: 765px) {
    padding: 0 40px;
  }
`;

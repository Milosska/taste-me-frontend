import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  color: #000000;
`;

export const LogoLink = styled(Link)`
  padding: 10px 0;

  font-family: "LilitaOne";
  font-weight: 400;
  font-size: 24px;
  line-height: 1.12;

  color: #f65900;

  > span {
    color: green;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 38px;
  }
`;

export const LocationText = styled.p`
  display: none;
  padding: 10px 0;
  line-height: 1.12;

  > span {
    font-weight: 600;
  }

  > svg {
    color: #ffb30e;
  }

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

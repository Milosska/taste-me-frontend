import styled from "styled-components";
import { OrderLink } from "src/components/Hero/Hero.styled";
import * as spaghettiImage from "src/images/order/spaghetti.png";
import * as bigSpaghettiImage from "src/images/order/spaghetti@2x.png";

export const Container = styled.div`
  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-template-rows: 1fr;
  }
`;

export const MainSection = styled.section`
  grid-column: 1;
  grid-row: 1;
`;

export const SideSection = styled.section`
  grid-column: 2;
  grid-row: 1;
  background-color: #fefaf1;

  @media screen and (min-width: 768px) {
    box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24),
      0px 14px 32px rgba(255, 178, 14, 0.29);
  }
`;

export const AccountThumb = styled.div`
  padding: 20px 15px 20px 130px;

  background-image: url(${spaghettiImage.default}),
    linear-gradient(to bottom, #ffb800, #ff8a00);
  background-repeat: no-repeat;
  background-size: 150px 120px, auto;
  background-position: left -25px, 100%;

  text-align: center;
  font-weight: 600;
  font-size: 18px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bigSpaghettiImage.default}),
      linear-gradient(to bottom, #ffb800, #ff8a00);
  }

  @media screen and (min-width: 768px) {
    padding: 30px 10px 30px 170px;
    border-top-left-radius: 10px;

    background-size: 200px 150px, auto;
    background-position: left -25px, 100%;

    font-size: 20px;
  }
`;

export const AccountLink = styled(OrderLink)`
  display: inline-block;
  margin-top: 10px;
  padding: 8px 25px;
`;

export const CurrentOrderSection = styled.div`
  padding: 20px 15px 0;

  @media screen and (min-width: 768px) {
    padding: 30px 20px 0;
  }
`;

export const CurrentOrderTitle = styled.h3`
  /* margin-bottom: 20px; */
  text-align: center;
  font-size: 22px;
`;

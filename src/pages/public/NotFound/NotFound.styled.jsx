import styled from "styled-components";
import { OrderLink } from "src/components/Hero/Hero.styled";
import * as image from "src/assets/images/notfound/notFound.png";
import * as bigImage from "src/assets/images/notfound/notFound@2x.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;

  font-size: 18px;
  line-height: 1.2;
  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const PageTitle = styled.h1`
  margin-bottom: 15px;

  color: #f17228;
  font-weight: 700;
  font-size: 32px;
  text-shadow: 0px 14px 15px rgba(255, 174, 0, 0.01),
    0px 27px 82px rgba(255, 174, 0, 0.28);

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 65px;
  }
`;

export const PictureThumb = styled.div`
  width: 200px;
  height: 150px;
  margin: 20px auto;

  background-image: url(${image.default});
  background-repeat: no-repeat;
  background-size: 120%;
  background-position: center;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bigImage.default});
  }

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 250px;
  }

  @media screen and (min-width: 1200px) {
    width: 500px;
    height: 350px;
  }
`;

export const MainLink = styled(OrderLink)`
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`;

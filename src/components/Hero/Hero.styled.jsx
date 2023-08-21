import styled from "styled-components";
import { Link } from "react-router-dom";
import * as descktopImage from "src/assets/images/main/descktop-hero.png";
import * as tabletImage from "src/assets/images/main/tablet-hero.png";
import * as bigDescktopImage from "src/assets/images/main/descktop-hero@2x.png";
import * as bigTabletImage from "src/assets/images/main/tablet-hero@2x.png";

export const Hero = styled.section`
  width: 100%;
  padding: 0 20px;

  font-size: 18px;
  line-height: 1.2;

  background-image: linear-gradient(to bottom, #ffb800, #ff8a00);
  background-repeat: no-repeat;
  background-size: auto;
  background-position: 100%;

  @media screen and (min-width: 768px) {
    height: 260px;

    background-image: url(${tabletImage.default}),
      linear-gradient(to bottom, #ffb800, #ff8a00);
    background-repeat: no-repeat;
    background-size: 320px 100%, auto;
    background-position: right bottom, 100%;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bigTabletImage.default}),
        linear-gradient(to bottom, #ffb800, #ff8a00);
    }
  }

  @media screen and (min-width: 1200px) {
    height: 350px;
    padding: 0 40px;

    font-size: 22px;
    background-image: url(${descktopImage.default}),
      linear-gradient(to bottom, #ffb800, #ff8a00);
    background-repeat: no-repeat;
    background-size: 650px 400px, auto;
    background-position: right bottom, 100%;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bigDescktopImage.default}),
        linear-gradient(to bottom, #ffb800, #ff8a00);
    }
  }
`;

export const HeroThumb = styled.div`
  width: 100%;
  padding: 40px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 450px;
    /* padding: 50px 0; */
  }

  @media screen and (min-width: 1200px) {
    width: 600px;
    padding: 100px 30px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 15px;

  color: #ffffff;
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

export const HeroText = styled.p`
  margin-bottom: 30px;
  font-size: 18px;
`;

export const OrderLink = styled(Link)`
  padding: 10px 20px;
  background-color: green;
  border-radius: 8px;

  color: #ffffff;
  font-weight: 600;

  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 15px 20px rgba(205, 47, 47, 0.24),
      0px 25px 40px rgba(97, 3, 11, 0.27);
  }
`;

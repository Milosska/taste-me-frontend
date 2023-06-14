import styled from "styled-components";
import { Link } from "react-router-dom";
import * as descktopImage from "../../../images/main/descktop-hero.png";
import * as tabletImage from "../../../images/main/tablet-hero.png";
import * as bigDescktopImage from "../../../images/main/descktop-hero@2x.png";
import * as bigTabletImage from "../../../images/main/tablet-hero@2x.png";

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

export const AdvantagesSection = styled.section`
  padding: 20px;

  background-image: linear-gradient(
    180deg,
    rgba(255, 206, 103, 0.22) -42.47%,
    rgba(253, 237, 202, 0) 100%
  );

  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const AdvantagesHeadline = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.12;
  color: #f17228;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const AdvantagesList = styled.ul`
  margin: 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    justify-items: center;
  }
`;

export const AdvantagesImg = styled.img`
  margin: 10px auto;

  @media screen and (min-width: 768px) {
    margin: 0 auto 10px;
  }
`;

export const AdvantagesTitle = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const RestaurantsSection = styled.section`
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const RestaurantsHeadline = styled(AdvantagesHeadline)`
  color: #000000;
`;

import { Hero, HeroThumb, HeroTitle, HeroText, OrderLink } from "./Hero.styled";

export const HeroSection = () => {
  return (
    <Hero>
      <HeroThumb>
        <HeroTitle>Are you starving?</HeroTitle>
        <HeroText>
          Within a few clicks, find meals that are accessible near you
        </HeroText>
        <OrderLink to="/order">Make my order</OrderLink>
      </HeroThumb>
    </Hero>
  );
};

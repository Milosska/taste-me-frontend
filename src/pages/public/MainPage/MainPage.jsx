import { Button } from "../../../components/Button/Button";
import { Hero, HeroThumb, HeroTitle, HeroText } from "./MainPage.styled";

const MainPage = () => {
  return (
    <>
      <Hero>
        <HeroThumb>
          <HeroTitle>Are you starving?</HeroTitle>
          <HeroText>
            Within a few clicks, find meals that are accessible near you
          </HeroText>
          <Button text="Make my order" type="button" color="green" />
        </HeroThumb>
      </Hero>
    </>
  );
};

export default MainPage;

import * as locationSvg from "src/assets/images/svg/location.svg";
import * as menuSvg from "src/assets/images/svg/menu.svg";
import * as paymentSvg from "src/assets/images/svg/payment.svg";
import * as mealsSvg from "src/assets/images/svg/meals.svg";
import {
  StyledSection,
  AdvantagesHeadline,
  AdvantagesList,
  AdvantagesImg,
  AdvantagesTitle,
} from "./AdvantagesSection.styled";

export const AdvantagesSection = () => {
  return (
    <StyledSection>
      <AdvantagesHeadline>How does it work</AdvantagesHeadline>
      <AdvantagesList>
        <li>
          <AdvantagesImg
            src={locationSvg.default}
            alt="location"
            width="60px"
          />
          <AdvantagesTitle>Select location</AdvantagesTitle>
          <p>Choose the location where your food will be delivered.</p>
        </li>
        <li>
          <AdvantagesImg src={menuSvg.default} alt="menu" width="60px" />
          <AdvantagesTitle>Choose order</AdvantagesTitle>
          <p>Check over hundreds of menus to pick your favorite food.</p>
        </li>
        <li>
          <AdvantagesImg src={paymentSvg.default} alt="payment" width="55px" />
          <AdvantagesTitle>Pay advanced</AdvantagesTitle>
          <p>
            It&apos;s quick, safe, and simple. Select several methods of payment
          </p>
        </li>
        <li>
          <AdvantagesImg src={mealsSvg.default} alt="meals" width="90px" />
          <AdvantagesTitle>Enjoy meals</AdvantagesTitle>
          <p>Food is made and delivered directly to your home.</p>
        </li>
      </AdvantagesList>
    </StyledSection>
  );
};

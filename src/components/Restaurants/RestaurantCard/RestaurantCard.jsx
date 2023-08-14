import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setRestaurant } from "src/redux/restaurant/slice";

import { MdDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import { RestaurantCardPaleceholder } from "../../Loader/Placeholders/RestaurantCardPlaceholder/RestaurantCardPalceholder";

import {
  Container,
  StyledLink,
  PhotoThumb,
  DiscountLabel,
  LogoThumb,
  LogoImg,
  Title,
  Rating,
  OpenLabel,
} from "./RestaurantCard.styled";

export const RestaurantCard = ({
  restaurant: {
    name,
    rating,
    logo_URL,
    background_URL,
    open_time,
    close_time,
    current_discount_percent,
  },
  isLoading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { VITE_CLOUDINARY_BASE_URI } = import.meta.env;
  const dispatch = useDispatch();

  useEffect(() => {
    const date = new Date();
    const currentTime = date.getTime();

    function setHours(timeString) {
      const hours = timeString.substring(0, 2);
      const minutes = timeString.substring(3, 5);

      return new Date(date.setHours(hours, minutes));
    }

    const openHours = setHours(open_time).getTime();
    const closeHours = setHours(close_time).getTime();

    if (openHours < currentTime && currentTime < closeHours) {
      setIsOpen(true);
      return;
    } else {
      setIsOpen(false);
    }
  }, [open_time, close_time]);

  const handleClick = (name) => {
    dispatch(setRestaurant(name));
    window.scrollTo(0, 0);
  };

  return (
    <ReactPlaceholder
      showLoadingAnimation
      customPlaceholder={RestaurantCardPaleceholder}
      ready={!isLoading}
    >
      <Container>
        <StyledLink to="/order" onClick={() => handleClick(name)}>
          <PhotoThumb img={`${VITE_CLOUDINARY_BASE_URI}${background_URL}`}>
            {current_discount_percent && (
              <DiscountLabel>
                <MdDiscount />
                {current_discount_percent}% off
              </DiscountLabel>
            )}
          </PhotoThumb>
          <LogoThumb>
            <LogoImg
              src={`${VITE_CLOUDINARY_BASE_URI}${logo_URL}`}
              alt={`${name} logo`}
              width="80px"
              height="80px"
            />
            <Title>{name}</Title>
            <Rating>
              <FaStar />
              {rating}
            </Rating>
          </LogoThumb>
          <OpenLabel open={isOpen}>
            {isOpen ? "Open Now" : "Opens tomorrow"}
          </OpenLabel>
        </StyledLink>
      </Container>
    </ReactPlaceholder>
  );
};

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    logo_URL: PropTypes.string.isRequired,
    background_URL: PropTypes.string.isRequired,
    open_time: PropTypes.string.isRequired,
    close_time: PropTypes.string.isRequired,
    current_discount_percent: PropTypes.number,
  }),
  isLoading: PropTypes.bool,
};

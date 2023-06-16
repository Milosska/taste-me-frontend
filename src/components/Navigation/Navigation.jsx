import { useEffect } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";
import { useWindowSize } from "react-use";

import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "src/redux/location/operations";
import { currentLocation } from "src/redux/location/selectors";

import { MdLocationPin } from "react-icons/md";
import { Menu } from "./Menu/Menu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { StyledNav, LogoLink, LocationText } from "./Navigation.styled";

export const Navigation = () => {
  const userLocation = useSelector(currentLocation);
  const { geoLocation } = useGeolocation();
  const window = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!geoLocation) {
      return;
    }

    dispatch(fetchLocation(geoLocation));
  }, [geoLocation, dispatch]);

  return (
    <StyledNav>
      <LogoLink to="/">
        Taste<span>Me</span>
      </LogoLink>
      {navigator.geolocation && (
        <LocationText>
          <span>Deliver to:</span> <MdLocationPin />
          {userLocation ? `${userLocation}` : "Unknown location"}
        </LocationText>
      )}
      {window.width <= 768 ? <MobileMenu /> : <Menu />}
    </StyledNav>
  );
};

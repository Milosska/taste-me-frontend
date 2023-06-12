import { useEffect, useState } from "react";
import { useGeolocation } from "../../hooks/useGeolocation";
import { fetchAddress } from "../../utils/geocodingAPI";
import { useWindowSize } from "react-use";

import { MdLocationPin } from "react-icons/md";
import { Menu } from "./Menu/Menu";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { StyledNav, LogoLink, LocationText } from "./Navigation.styled";

export const Navigation = () => {
  const [address, setAddress] = useState(null);
  const { geoLocation } = useGeolocation();
  const window = useWindowSize();

  useEffect(() => {
    if (!geoLocation) {
      return;
    }
    getCurrentAddress(geoLocation);

    async function getCurrentAddress(geodata) {
      const fetchedAddress = await fetchAddress(geodata);
      setAddress(fetchedAddress.results[0].formatted);
    }
  }, [geoLocation]);

  return (
    <StyledNav>
      <LogoLink to="/">
        Taste<span>Me</span>
      </LogoLink>
      {navigator.geolocation && (
        <LocationText>
          <span>Deliver to:</span> <MdLocationPin />
          {address ? `${address}` : "Unknown location"}
        </LocationText>
      )}
      {window.width <= 768 ? <MobileMenu /> : <Menu />}
    </StyledNav>
  );
};

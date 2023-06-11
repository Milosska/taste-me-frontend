import { useState } from "react";
import { FaUserCheck, FaUserEdit, FaBackspace } from "react-icons/fa";
import { MdMenu, MdClose, MdOutlineFastfood } from "react-icons/md";
import {
  ToggleBtn,
  MenuContainer,
  List,
  StyledLink,
} from "./MobileMenu.styled";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      {!isOpen ? (
        <ToggleBtn
          isOpen={isOpen}
          onClick={handleToggle}
          aria-expanded="false"
          aria-controls="mobile-menu-open"
          type="button"
        >
          <MdMenu />
        </ToggleBtn>
      ) : (
        <MenuContainer isOpen={isOpen}>
          <ToggleBtn
            isOpen={isOpen}
            type="button"
            onClick={handleToggle}
            aria-expanded="false"
            aria-controls="mobile-menu-close"
          >
            <MdClose />
          </ToggleBtn>
          <List>
            {location.pathname !== "/" && (
              <li>
                <StyledLink to="/" onClick={handleToggle}>
                  <FaBackspace />
                  <p>Back to main</p>
                </StyledLink>
              </li>
            )}
            <li>
              <StyledLink to="/order" onClick={handleToggle}>
                <MdOutlineFastfood /> <p>Order</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/login" onClick={handleToggle}>
                <FaUserCheck /> <p>Login</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/signup" onClick={handleToggle}>
                <FaUserEdit />
                <p>SignUp</p>
              </StyledLink>
            </li>
          </List>
        </MenuContainer>
      )}
    </>
  );
};

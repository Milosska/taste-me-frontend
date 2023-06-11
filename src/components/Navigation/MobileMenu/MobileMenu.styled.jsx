import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ToggleBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(prop) => (prop.isOpen ? "0 0 0 auto" : "0")};
  padding: 5px;
  background-color: transparent;
  cursor: pointer;

  > svg {
    width: 30px;
    height: 30px;
    color: #ffb30e;
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  padding: 5px 20px;
  background-color: #ffffff;
  animation: menuOpen 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes menuOpen {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;

  font-size: 22px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;

  font-weight: 600;
  line-height: 1.12;

  > svg {
    width: 25px;
    height: 25px;
    color: #ffb30e;
  }

  :hover,
  :focus {
    box-shadow: 0px 5px 10px rgba(255, 174, 0, 0.26),
      0px 20px 40px rgba(255, 174, 0, 0.29);
    border-radius: 8px;
  }

  :visited {
    color: inherit;
  }

  &.active {
    color: #f65900;
  }
`;

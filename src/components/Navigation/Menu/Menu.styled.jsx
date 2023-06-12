import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;

  color: inherit;
  font-weight: 600;
  line-height: 1.12;

  > svg {
    width: 20px;
    height: 20px;
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

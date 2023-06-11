import { useLocation } from "react-router-dom";
import { FaUserCheck, FaUserEdit, FaBackspace } from "react-icons/fa";
import { List, StyledLink } from "./Menu.styled";

export const Menu = () => {
  const location = useLocation();

  return (
    <>
      <List>
        {location.pathname === "/order" && (
          <li>
            <StyledLink to="/">
              <FaBackspace />
              <p>Back to main</p>
            </StyledLink>
          </li>
        )}
        {/* <li>
        <StyledLink to="/order" onClick={handleToggle}>
                <MdOutlineFastfood /> <p>Order</p>
              </StyledLink>
        </li> */}
        <li>
          <StyledLink to="/login">
            <FaUserCheck /> <p>Login</p>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/signup">
            <FaUserEdit />
            <p>SignUp</p>
          </StyledLink>
        </li>
      </List>
    </>
  );
};

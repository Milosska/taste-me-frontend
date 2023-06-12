import PropTypes from "prop-types";
import { StyledBtn } from "./Button.styled";

export const Button = ({ text, type, color, onClick }) => {
  return (
    <StyledBtn type={type} onClick={onClick} color={color}>
      {text}
    </StyledBtn>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

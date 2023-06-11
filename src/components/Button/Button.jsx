import { StyledBtn } from "./Button.styled";

export const Button = ({ text, type, color, onClick }) => {
  return (
    <StyledBtn type={type} onClick={onClick} color={color}>
      {text}
    </StyledBtn>
  );
};

import styled from "styled-components";

const handleColorType = (color) => {
  switch (color) {
    case "primary":
      return "#FFB30E";
    case "secondary":
      return "#F17228";
    default:
      return "lightgrey";
  }
};

export const StyledBtn = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => handleColorType(props.color)};

  :hover,
  :focus {
    box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24),
      0px 14px 32px rgba(255, 178, 14, 0.29);
  }
`;

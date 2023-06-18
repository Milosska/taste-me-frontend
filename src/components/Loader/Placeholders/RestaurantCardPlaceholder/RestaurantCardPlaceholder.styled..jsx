import styled from "styled-components";

export const Container = styled.li`
  padding: 15px 5px;
  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 5px 10px rgba(255, 174, 0, 0.26),
      0px 20px 40px rgba(255, 174, 0, 0.29);
    border-radius: 15px;
  }
`;

export const PhotoThumb = {
  position: "relative",
  width: "100%",
  height: 150,
  borderRadius: 16,
};

export const LogoThumb = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  margin-top: 10px;
`;

export const LogoImg = {
  gridRowStart: 1,
  gridRowEnd: 3,
  justifySelf: "center",
  width: 64,
  height: 64,
  borderRadius: 4,
  objectFit: "contain",
};

export const Rating = {
  justifySelf: "flex-start",
  alignSelf: "center",
};

export const OpenLabel = {
  width: 120,
  marginTop: 10,
  padding: 10,
  borderRadius: 16,
};

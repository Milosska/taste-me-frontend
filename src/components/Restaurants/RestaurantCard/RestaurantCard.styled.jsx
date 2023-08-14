import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.li`
  padding: 15px 5px;
  box-shadow: none;
  border-radius: 15px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 5px 10px rgba(255, 174, 0, 0.26),
      0px 20px 40px rgba(255, 174, 0, 0.29);
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
`;

export const PhotoThumb = styled.div`
  position: relative;
  width: 100%;
  height: 150px;

  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 16px;

  @media screen and (min-width: 768px) {
    height: 200px;
  }
`;

export const DiscountLabel = styled.p`
  position: absolute;
  top: 15px;
  left: 15px;
  width: 120px;
  padding: 8px 5px;
  background-color: #f17228;
  border-radius: 8px;
  color: #ffffff;

  > svg {
    margin-right: 5px;
  }
`;

export const LogoThumb = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(2, 1fr);
  margin-top: 10px;
`;

export const LogoImg = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  justify-self: center;

  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: contain;
`;

export const Title = styled.h3`
  justify-self: flex-start;
  align-self: flex-end;
  font-size: 18px;
`;

export const Rating = styled.p`
  justify-self: flex-start;
  align-self: center;
  color: #ffb30e;

  > svg {
    margin-right: 5px;
  }
`;

export const OpenLabel = styled.p`
  max-width: ${(props) => (props.open ? "120px" : "180px")};
  margin: 10px 0 0 0;
  padding: 8px 10px;
  border-radius: 16px;
  background: ${(props) =>
    props.open ? " rgba(121, 185, 60, 0.2)" : "rgba(241, 114, 40, 0.2)"};

  color: ${(props) => (props.open ? "#79B93C" : "#F17228")};
  font-weight: 700;
`;

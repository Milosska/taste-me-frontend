import styled from "styled-components";

export const StyledSection = styled.section`
  padding: 20px;

  background-image: linear-gradient(
    180deg,
    rgba(255, 206, 103, 0.22) -42.47%,
    rgba(253, 237, 202, 0) 100%
  );

  text-align: center;

  @media screen and (min-width: 1200px) {
    padding: 40px;
  }
`;

export const AdvantagesHeadline = styled.h2`
  margin-bottom: 20px;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.12;
  color: #f17228;

  @media screen and (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

export const AdvantagesList = styled.ul`
  margin: 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    justify-items: center;
  }
`;

export const AdvantagesImg = styled.img`
  margin: 10px auto;

  @media screen and (min-width: 768px) {
    margin: 0 auto 10px;
  }
`;

export const AdvantagesTitle = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

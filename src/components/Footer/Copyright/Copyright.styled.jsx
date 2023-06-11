import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.5);

  font-size: 14px;
  text-align: center;

  @media screen and (min-width: 765px) {
    display: flex;
    justify-content: space-between;

    text-align: start;
  }

  @media screen and (min-width: 1200px) {
    padding: 60px 0 20px;
    font-size: 18px;
  }

  span {
    font-weight: 600;
    color: #ffb30e;
  }

  a {
    padding-left: 5px;
    font-weight: 600;
    cursor: pointer;
    color: #f65900;
  }
`;

export const Text = styled.p`
  margin-bottom: 15px;

  @media screen and (min-width: 765px) {
    margin-bottom: 0;
  }
`;

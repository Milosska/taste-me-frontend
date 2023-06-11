import styled from "styled-components";

export const Container = styled.div`
  padding: 60px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 1.12;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  align-content: space-between;

  height: 140px;
  font-size: 14px;

  @media screen and (min-width: 1200px) {
    height: 160px;
    font-size: 18px;
  }
`;

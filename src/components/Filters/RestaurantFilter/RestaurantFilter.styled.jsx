import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;

  @media screen and (min-width: 1200px) {
    padding: 15px 15px 0 40px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.12;
  text-align: center;
  color: #f17228;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

export const Item = styled.li`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 8px;

  background-color: ${(prop) => {
    const isChoosen = prop.children === prop.choosedOption;
    return isChoosen ? "green" : "#faaa01";
  }};

  font-weight: 700;
  color: #ffffff;

  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24),
      0px 14px 32px rgba(255, 178, 14, 0.29);
  }
`;

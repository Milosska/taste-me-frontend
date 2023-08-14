import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;

  background: linear-gradient(
    180deg,
    rgba(255, 206, 103, 0.22) -42.47%,
    rgba(253, 237, 202, 0) 100%
  );

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
  display: grid;
  grid-template-rows: 2fr 1fr;
  justify-items: center;

  width: 72px;
  height: 72px;
  padding: 10px 5px;
  border-radius: 16px;
  background-color: ${(prop) => {
    const isChoosen = prop.children[1].props.children === prop.choosedFilter;
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

  > svg {
    width: 32px;
    height: 32px;
  }

  > p {
    font-size: 14px;
  }
`;

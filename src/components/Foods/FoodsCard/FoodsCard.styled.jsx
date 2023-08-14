import styled from "styled-components";

export const Container = styled.li`
  padding: 10px;
  box-shadow: none;
  border-radius: 15px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 5px 10px rgba(255, 174, 0, 0.26),
      0px 10px 20px rgba(255, 174, 0, 0.29);
  }
`;

export const PhotoThumb = styled.div`
  width: 100%;
  height: 100px;

  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 16px;

  outline: 2px solid #faaa01;

  @media screen and (min-width: 768px) {
    height: 150px;
  }
`;

export const Title = styled.h4`
  margin-top: 5px;
  font-size: 16px;
  text-align: center;
`;

export const FoodDataThumb = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;

  margin-top: 5px;
`;

export const Type = styled.p`
  padding: 2px 5px 4px;
  background-color: rgba(121, 185, 60, 0.2);
  border-radius: 16px;

  text-align: center;
  color: #79b93c;
`;

export const Cuisine = styled.p`
  padding: 2px 10px 4px;
  background-color: rgba(241, 114, 40, 0.2);
  border-radius: 16px;

  text-align: center;
  color: #f17228;
`;

export const Price = styled.p`
  grid-row-start: 2;
  grid-row-end: 4;

  display: flex;
  align-items: center;

  font-weight: 700;
  font-size: 18px;

  > svg {
    color: #ffb30e;
  }
`;

export const BtnThumb = styled.div`
  grid-row-start: 2;
  grid-row-end: 4;
  justify-self: end;
  align-self: center;
`;

export const AddFoodBtn = styled.button`
  width: 38px;
  height: 38px;

  background-color: #ffb30e;
  color: #ffffff;
  font-weight: 600;

  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24),
      0px 14px 32px rgba(255, 178, 14, 0.29);
  }
`;

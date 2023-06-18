import styled from "styled-components";

export const Container = styled.li`
  padding: 5px;
`;

export const PhotoThumb = {
  width: "100%",
  height: 150,
};

export const Title = {
  marginTop: 5,
};

export const FoodDataThumb = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;

  margin-top: 5px;
`;

export const Type = {
  padding: "2px 5px 4px",
  borderRadius: 16,
};

export const Cuisine = {
  padding: "2px 5px 4px",
  borderRadius: 16,
};

export const Price = {
  gridRowStart: 2,
  gridRowEnd: 4,
};

export const AddFoodBtn = {
  gridRowStart: 2,
  gridRowEnd: 4,
  justifySelf: "end",
  alignSelf: "center",
  width: 38,
  height: 38,
};

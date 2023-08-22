import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 5px;
  width: 100%;
  padding: 10px 20px 10px 10px;
  border-radius: 15px;

  :hover,
  :focus {
    box-shadow: rgba(205, 47, 47, 0.24) 0px 15px 20px,
      rgba(97, 3, 11, 0.27) 0px 25px 40px;
  }
`;

export const RemoveBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  background-color: #fff;

  > svg {
    width: 20px;
    height: 20px;
    color: #e74c3c;
  }
`;

export const ItemImg = styled.img`
  grid-row: 1/4;
  grid-column: 1 /2;
  width: 80px;
  height: 80px;

  background-image: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 16px;

  outline: 2px solid #faaa01;

  @media screen and (min-width: 768px) {
    /* height: 150px; */
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const QuantityThumb = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: start;
  width: 150px;
`;

export const QuantityBtn = styled.button`
  background-color: #ffb30e;
  color: #ffffff;

  :hover,
  :focus {
    background-color: green;
  }

  > svg {
    width: 12px;
    height: 12px;
  }
`;

export const Price = styled(Title)`
  color: #e74c3c;
`;

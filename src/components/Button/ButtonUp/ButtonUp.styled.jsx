import { FiArrowUp } from "react-icons/fi";
import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: 10px;
  right: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  border-radius: 25%;
  background-color: #faaa01;
  border: none;

  :hover,
  :focus {
    box-shadow: 0px 5px 8px rgba(222, 151, 0, 0.24),
      0px 14px 32px rgba(255, 178, 14, 0.29);
  }

  @media (min-width: 768px) {
    bottom: 20px;
    right: 50px;
    width: 55px;
    height: 55px;
  }

  @media (min-width: 1900px) {
    width: 100px;
    height: 100px;
  }

  &.is-hidden {
    display: none;
  }
`;

export const Icon = styled(FiArrowUp)`
  width: 30px;
  height: 30px;
  color: #fff;

  @media (min-width: 768px) {
    width: 38px;
    height: 38px;
  }

  @media (min-width: 1900px) {
    width: 50px;
    height: 50px;
  }
`;

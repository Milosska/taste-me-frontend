import styled from "styled-components";

export const AddressForm = styled.form`
  padding: 20px 15px;
  background-color: #feefd0;

  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormTitle = styled.h3`
  margin-bottom: 20px;
  color: rgba(241, 114, 40, 0.7);
  text-align: center;
  font-size: 22px;
`;

export const FormThumb = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: repeat(2, 1fr);
`;

export const FormLabel = styled.label`
  justify-self: end;
  align-self: center;
  font-weight: 600;
`;

export const FormInputWrapper = styled.div`
  position: relative;

  > svg {
    position: absolute;
    top: 5px;
    left: 10px;
    width: 20px;
    height: 20px;
    color: #faaa01;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 5px 10px 5px 35px;
  border: 1px solid #f8b602;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

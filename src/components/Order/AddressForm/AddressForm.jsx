import { MdLocationPin, MdPhoneInTalk } from "react-icons/md";
import {
  FormContainer,
  FormTitle,
  FormThumb,
  FormLabel,
  FormInputWrapper,
  FormInput,
} from "./AddressForm.styled";

export const AddressForm = () => {
  return (
    <FormContainer>
      <FormTitle>Indicate your delivery data</FormTitle>
      <FormThumb>
        <FormLabel htmlFor="address">Address</FormLabel>
        <FormInputWrapper>
          <MdLocationPin />
          <FormInput
            id="address"
            type="text"
            name="address"
            placeholder="Kyiv, Volodymyrska str.1"
          />
        </FormInputWrapper>
        <FormLabel htmlFor="tel">Tel.</FormLabel>
        <FormInputWrapper>
          <MdPhoneInTalk />
          <FormInput
            id="tel"
            type="tel"
            name="phone"
            placeholder="+380112223344"
          />
        </FormInputWrapper>
      </FormThumb>
    </FormContainer>
  );
};

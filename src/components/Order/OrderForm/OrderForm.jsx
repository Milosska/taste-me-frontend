import { MdLocationPin, MdPhoneInTalk } from "react-icons/md";
import {
  AddressForm,
  FormTitle,
  FormThumb,
  FormLabel,
  FormInputWrapper,
  FormInput,
} from "./OrderForm.styled";

export const OrderForm = () => {
  return (
    <AddressForm>
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
    </AddressForm>
  );
};

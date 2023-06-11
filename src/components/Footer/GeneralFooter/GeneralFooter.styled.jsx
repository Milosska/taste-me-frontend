import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  text-align: center;

  font-size: 14px;
  line-height: 1.12;

  @media screen and (min-width: 765px) {
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    text-align: start;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Address = styled.address`
  font-style: normal;
`;

export const Title = styled.h4`
  margin-bottom: 10px;

  @media screen and (min-width: 765px) {
    margin-bottom: 20px;
  }
`;

export const List = styled.ul`
  margin: 0;
  li {
    :not(:last-child) {
      margin-bottom: 10px;

      @media screen and (min-width: 765px) {
        margin-bottom: 20px;
      }
    }
  }

  a {
    color: #ffffff;
  }
`;

export const FooterThumb = styled.div`
  margin-top: 20px;

  @media screen and (min-width: 765px) {
    margin-top: 0;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin: 0 0 15px;

  a {
    color: #ffffff;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media screen and (min-width: 765px) {
    justify-content: start;
    margin-top: 0;
  }
`;

export const SubscribeText = styled.p`
  margin-bottom: 15px;
`;

export const StyledForm = styled.form`
  @media screen and (min-width: 765px) {
    display: flex;
    gap: 15px;
  }
`;

export const StyledInput = styled.input`
  width: 300px;
  margin-bottom: 15px;
  padding: 10px 20px;
  background-color: #424242;
  border-radius: 8px;
  border: none;

  @media screen and (min-width: 765px) {
    margin: 0;
  }
`;

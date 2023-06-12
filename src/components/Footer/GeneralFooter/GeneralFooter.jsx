import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

import { Button } from "../../Button/Button";
import {
  Container,
  Address,
  Title,
  List,
  FooterThumb,
  SocialList,
  SocialLink,
  StyledForm,
  SubscribeText,
  StyledInput,
} from "./GeneralFooter.styled";

export const GeneralFooter = () => {
  return (
    <Container>
      <Address>
        <Title>Company</Title>
        <List>
          <li>
            <a
              href="https://goo.gl/maps/5ZYDRsjNGcq4B8iE6"
              target="_blank"
              rel="noreferrer noopener nofollow"
            >
              18a, Kudryashova Street, Kyiv, 02000
            </a>
          </li>
          <li>
            <a href="mailto:tasteme@corpmail.com">tasteme@corpmail.com</a>
          </li>
          <li>
            <a href="tel:+380911111111">+38 091 111 11 11</a>
          </li>
        </List>
      </Address>
      <FooterThumb>
        <div>
          <Title>Follow Us</Title>
          <SocialList>
            <li>
              <SocialLink
                href="https://github.com/Milosska"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="github"
              >
                <FaGithub />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://www.linkedin.com/in/liudmyla-deinychenko-b98799264/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="linkedin"
              >
                <FaLinkedin />
              </SocialLink>
            </li>
            <li>
              <SocialLink
                href="https://t.me/DeinychenkoLG"
                target="_blank"
                rel="noreferrer noopener nofollow"
                aria-label="telegram"
              >
                <FaTelegram />
              </SocialLink>
            </li>
          </SocialList>
        </div>
        <div>
          <SubscribeText>
            Receive exclusive offers in your mailbox
          </SubscribeText>
          <StyledForm>
            <label>
              <StyledInput
                name="email"
                type="email"
                placeholder={`${"\u2709"} Enter your email`}
                required
              />
            </label>
            <Button text="Subscribe" type="submit" color={"primary"} />
          </StyledForm>
        </div>
      </FooterThumb>
    </Container>
  );
};

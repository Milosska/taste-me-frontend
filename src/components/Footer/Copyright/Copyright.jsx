import { Container, Text } from "./Copyright.styled";

export const Copyright = () => {
  return (
    <Container>
      <Text>
        All rights Reserved <span>{"\u0040"} Your Company, 2023</span>
      </Text>
      <p>
        Made by
        <a
          href="https://github.com/Milosska"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Milosska
        </a>
      </p>
    </Container>
  );
};

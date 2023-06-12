import {
  Container,
  PageTitle,
  PictureThumb,
  MainLink,
} from "./NotFound.styled";

const NotFoundPage = () => {
  return (
    <Container>
      <PageTitle>Page Not Found</PageTitle>
      <p>
        The address is typed incorrectly or the page no longer exists on the
        site.
      </p>
      <PictureThumb />
      <MainLink to="/">Go to the main page</MainLink>
    </Container>
  );
};

export default NotFoundPage;

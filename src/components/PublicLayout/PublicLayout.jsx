import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Navigation } from "../Navigation/Navigation";
import { Container, Header, Main, Footer } from "./PublicLayout.styled";

export const PublicLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

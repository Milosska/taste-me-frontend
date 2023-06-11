import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize } from "react-use";

import { Navigation } from "../Navigation/Navigation";
import { CitiesList } from "../Footer/CitiesList/CitiesList";
import { GeneralFooter } from "../Footer/GeneralFooter/GeneralFooter";
import { Copyright } from "../Footer/Copyright/Copyright";
import { Container, Header, Main, Footer } from "./PublicLayout.styled";

export const PublicLayout = () => {
  const window = useWindowSize();

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
      <Footer>
        {window.width >= 768 && <CitiesList />}
        <GeneralFooter />
        <Copyright />
      </Footer>
    </Container>
  );
};

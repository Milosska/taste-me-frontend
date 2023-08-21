import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useWindowSize, useWindowScroll } from "react-use";

import { Loader } from "../Loader/GlobalLoader/Loader";
import { Navigation } from "../Navigation/Navigation";
import { CitiesList } from "../Footer/CitiesList/CitiesList";
import { GeneralFooter } from "../Footer/GeneralFooter/GeneralFooter";
import { Copyright } from "../Footer/Copyright/Copyright";
import { ButtonUp } from "../Button/ButtonUp/ButtonUp";
import { Container, Header, Main, Footer } from "./PublicLayout.styled";

export const PublicLayout = () => {
  const window = useWindowSize();
  const { y } = useWindowScroll();

  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        {y > 500 && <ButtonUp />}
      </Main>
      <Footer>
        {window.width >= 768 && <CitiesList />}
        <GeneralFooter />
        <Copyright />
      </Footer>
    </Container>
  );
};

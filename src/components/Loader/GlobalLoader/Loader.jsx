import { createPortal } from "react-dom";
import { Watch } from "react-loader-spinner";
import { Container } from "./Loader.styled";

const LoaderRoor = document.querySelector("#loader-root");

export const Loader = () => {
  return createPortal(
    <Container>
      <Watch
        height="120"
        width="120"
        radius="48"
        color="#FFB30E"
        ariaLabel="watch-loading"
        visible={true}
      />
    </Container>,
    LoaderRoor
  );
};

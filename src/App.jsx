import "modern-normalize";
import { GlobalStyles } from "./GlobalStyles";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Loader } from "./components/Loader/GlobalLoader/Loader";

import { PublicLayout } from "./components/PublicLayout/PublicLayout";
const MainPage = lazy(() => import("./pages/public/MainPage/MainPage"));
const OrderPage = lazy(() => import("./pages/public/OrderPage/OrderPage"));
const LoginPage = lazy(() => import("./pages/public/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("./pages/public/RegisterPage/RegisterPage")
);
import NotFoundPage from "./pages/public/NotFound/NotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<MainPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;

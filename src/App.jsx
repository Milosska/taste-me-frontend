import "modern-normalize";
import { GlobalStyles } from "./GlobalStyles";

import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PublicLayout } from "./components/PublicLayout/PublicLayout";
const MainPage = lazy(() => import("./pages/public/MainPage/MainPage"));
const OrderPage = lazy(() => import("./pages/public/OrderPage/OrderPage"));
const LoginPage = lazy(() => import("./pages/public/LoginPage/LoginPage"));
const RegisterPage = lazy(() =>
  import("./pages/public/RegisterPage/RegisterPage")
);

function App() {
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<MainPage />} />
            <Route path="order" element={<OrderPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<RegisterPage />} />
            <Route path="*" element={<MainPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

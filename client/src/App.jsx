import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SharedLayout from "./components/common/SharedLayout/SharedLayout";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import RestrictedPage from "./pages/RestrictedPage/RestrictedPage";

const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.styled")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage.styled"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.styled"));
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage/RegisterPage.styled")
);
const CalculatorPage = lazy(() =>
  import("./pages/CalculatorPage/CalculatorPage.styled")
);
const DiaryPage = lazy(() => import("./pages/DiaryPage/DiaryPage.styled"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<RestrictedPage page={HomePage} />} />
          <Route path="/login" element={<RestrictedPage page={LoginPage} />} />
          <Route
            path="/register"
            element={<RestrictedPage page={RegisterPage} />}
          />
          <Route path="/diary" element={<PrivatePage page={DiaryPage} />} />
          <Route
            path="/calculator"
            element={<PrivatePage page={CalculatorPage} />}
          />
        </Route>

        <Route
          path="*"
          element={
            <Suspense>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;

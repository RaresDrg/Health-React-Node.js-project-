import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/common/SharedLayout/SharedLayout";
import StyledHomePage from "./pages/HomePage/HomePage.styled";
import StyledLoginPage from "./pages/LoginPage/LoginPage.styled";
import StyledRegisterPage from "./pages/RegisterPage/RegisterPage.styled";
import StyledCalculatorPage from "./pages/CalculatorPage/CalculatorPage.styled";
import StyledDiaryPage from "./pages/DiaryPage/DiaryPage.styled";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<StyledHomePage />} />
          <Route path="/login" element={<StyledLoginPage />} />
          <Route path="/register" element={<StyledRegisterPage />} />
          <Route path="/diary" element={<StyledDiaryPage />} />
          <Route path="/calculator" element={<StyledCalculatorPage />} />

          {/* todo: => not found */}
        </Route>
      </Routes>
    </>
  );
};

export default App;

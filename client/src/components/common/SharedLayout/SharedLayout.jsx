import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import StyledHeader from "../../Header/Header.styled";

const SharedLayout = () => {
  return (
    <>
      <StyledHeader />

      <main>
        <Suspense>
          <Outlet></Outlet>
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;

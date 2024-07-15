import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import StyledHeader from "../../Header/Header.styled";
import Notification from "../Notification/Notification";
import StyledLoadingScreen from "../LoadingScreen/LoadingScreen.styled";
import { refreshUser } from "../../../redux/auth/operations";
import useAuth from "../../../hooks/useAuth";

const SharedLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const { isLoading } = useAuth();

  return (
    <>
      <StyledHeader />

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>

      <Notification />

      {isLoading && createPortal(<StyledLoadingScreen />, document.body)}
    </>
  );
};

export default SharedLayout;

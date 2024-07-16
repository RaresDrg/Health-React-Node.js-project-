import Container from "../common/Container/Container.styled";
import StyledLogo from "../Logo/Logo.styled";
import StyledUserInfo from "../UserInfo/UserInfo.styled";
import { AuthNavigation, AppNavigation } from "../Navigation/Navigation.styled";
import StyledBurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn.styled";
import { createPortal } from "react-dom";
import { lazy, Suspense, useState } from "react";
import useResponsive from "../../hooks/useResponsive.js";
import useAuth from "../../hooks/useAuth.js";

const StyledBurgerMenu = lazy(() =>
  import("../BurgerMenu/BurgerMenu.styled.js")
);

const Header = ({ className: styles }) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const { isLoggedIn } = useAuth();
  const { isOnMobile, isOnTablet, isOnDesktop } = useResponsive();

  return (
    <>
      <header className={styles}>
        <Container>
          <StyledLogo />

          {!isLoggedIn && <AuthNavigation />}
          {isLoggedIn && isOnDesktop && <AppNavigation />}

          {isLoggedIn && isOnMobile && (
            <StyledBurgerMenuBtn
              isChecked={isBurgerMenuOpen}
              toggleModal={() => setIsBurgerMenuOpen((prev) => !prev)}
            />
          )}

          {isLoggedIn && isOnTablet && (
            <div>
              <StyledUserInfo />
              <StyledBurgerMenuBtn
                isChecked={isBurgerMenuOpen}
                toggleModal={() => setIsBurgerMenuOpen((prev) => !prev)}
              />
            </div>
          )}

          {isLoggedIn && isOnDesktop && <StyledUserInfo />}
        </Container>
      </header>
      {isLoggedIn && isOnMobile && <StyledUserInfo />}

      <Suspense>
        {isBurgerMenuOpen &&
          isLoggedIn &&
          createPortal(
            <StyledBurgerMenu closeModal={() => setIsBurgerMenuOpen(false)} />,
            document.body
          )}
      </Suspense>
    </>
  );
};

export default Header;

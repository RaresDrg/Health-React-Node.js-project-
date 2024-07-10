import StyledBurgerMenuBtn from "../BurgerMenuBtn/BurgerMenuBtn.styled";
import Container from "../common/Container/Container.styled";
import StyledLogo from "../Logo/Logo.styled";

import { AuthNavigation, AppNavigation } from "../Navigation/Navigation.styled";

import { useMediaQuery } from "react-responsive";
import StyledUserInfo from "../UserInfo/UserInfo.styled";

import { useState } from "react";
import { createPortal } from "react-dom";
import StyledBurgerMenu from "../BurgerMenu/BurgerMenu.styled.js";

const Header = ({ className: styles }) => {
  // todo: user logat din db
  const isLoggedIn = true;

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const isOnMobile = useMediaQuery({ maxWidth: 767 });
  const isOnTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isOnDesktop = useMediaQuery({ minWidth: 1280 });

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

      {isBurgerMenuOpen &&
        createPortal(
          <StyledBurgerMenu closeModal={() => setIsBurgerMenuOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default Header;

import logo from "../../assets/logo.svg";
import { useMediaQuery } from "react-responsive";

const Logo = ({ className: styles }) => {
  const isNotOnMobile = useMediaQuery({ query: "(min-width: 767px)" });

  return (
    // todo: href-ul bun
    <a className={styles} href="/">
      <img src={logo} alt="app-logo" />
      <p>
        <span>Health</span>
        <span>App</span>
        {/* {isNotOnMobile && <span>App</span>} */}
      </p>
    </a>
  );
};

export default Logo;

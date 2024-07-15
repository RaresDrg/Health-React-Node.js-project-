import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navigation = ({ className: styles }) => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles}>
      {!isLoggedIn && <NavLink to="/login">Log in</NavLink>}
      {!isLoggedIn && <NavLink to="/register">Register</NavLink>}

      {isLoggedIn && <NavLink to="/diary">Diary</NavLink>}
      {isLoggedIn && <NavLink to="/calculator">Calculator</NavLink>}
    </div>
  );
};

export default Navigation;

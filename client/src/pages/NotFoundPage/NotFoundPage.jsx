import { useNavigate } from "react-router-dom";
import notFoundBgVideo from "../../assets/backgorunds/notFoundPage/notFoundBgVideo.mp4";
import "animate.css";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const NotFoundPage = ({ className: styles }) => {
  const navigate = useNavigate();

  return (
    <div className={styles}>
      <video autoPlay={true} muted={true} loop={true}>
        <source className="video" src={notFoundBgVideo} type="video/mp4" />
      </video>
      <div className="goBack"></div>
      <UseAnimations
        onClick={() => navigate("/")}
        animation={arrowDown}
        size={58}
        strokeColor={"#fff"}
        className="arrow"
      />
      <h2>Oops! - Page not found</h2>
      <h1 className="animate__animated animate__flash animate__infinite animate__slow">
        404
      </h1>

      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
    </div>
  );
};

export default NotFoundPage;

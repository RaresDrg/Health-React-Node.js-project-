import { useState } from "react";
import { createPortal } from "react-dom";
import StyledExitModal from "../ExitModal/ExitModal.styled";

const UserInfo = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // todo: user din db
  const userData = {
    name: "Rares Frumosu",
  };

  return (
    <>
      <div className={styles}>
        <span>{userData.name}</span>
        <button type="button" onClick={() => setIsModalOpen(true)}>
          Exit
        </button>
      </div>

      {isModalOpen &&
        createPortal(
          <StyledExitModal closeModal={() => setIsModalOpen(false)} />,
          document.body
        )}
    </>
  );
};

export default UserInfo;

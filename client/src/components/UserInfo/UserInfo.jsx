import { lazy, Suspense, useState } from "react";
import { createPortal } from "react-dom";
import useAuth from "../../hooks/useAuth";

const StyledExitModal = lazy(() => import("../ExitModal/ExitModal.styled"));

const UserInfo = ({ className: styles }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <div className={styles}>
        <span>{user.name}</span>
        <button
          type="button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsModalOpen(true);
          }}
        >
          Exit
        </button>
      </div>

      <Suspense>
        {isModalOpen &&
          createPortal(
            <StyledExitModal closeModal={() => setIsModalOpen(false)} />,
            document.body
          )}
      </Suspense>
    </>
  );
};

export default UserInfo;

const BurgerMenuBtn = ({ className: styles, toggleModal, isChecked }) => {
  return (
    <div className={styles}>
      <input
        type="checkbox"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          toggleModal();
        }}
        checked={isChecked}
        onChange={(event) => (event.target.checked = isChecked)}
      />
      <div className="hamburgerLines">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default BurgerMenuBtn;

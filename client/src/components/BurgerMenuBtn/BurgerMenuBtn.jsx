const BurgerMenuBtn = ({ className: styles, toggleModal, isChecked }) => {
  return (
    <div className={styles}>
      <input
        type="checkbox"
        onClick={toggleModal}
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

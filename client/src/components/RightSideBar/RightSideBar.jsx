const RightSideBar = ({ className: styles }) => {
  // todo: => datele aici
  const data = "13.08.2023";

  const left = 20500;
  const consumed = 800;
  const dailyRate = 2800;
  const n = 20;

  const food = [
    "mere",
    "pere",
    "piersici",
    "cacat asfasf as fas fsa gsagsag asg ",
  ];

  return (
    <div className={styles}>
      <div className="summary">
        <h3>Summary for {data}</h3>
        <div className="columns">
          <div>
            <span>Left</span>
            <span>Consumed</span>
            <span>Daily rate</span>
            <span>Rate of normal</span>
          </div>
          <div>
            <span>{left} kcal</span>
            <span>{consumed} kcal</span>
            <span>{dailyRate} kcal</span>
            <span>{n} %</span>
          </div>
        </div>
      </div>
      <div className="recomandation">
        <h3>Food not recommended</h3>
        <div>
          <span>{food[0]}</span>
          <span>{food[1]}</span>
          <span>{food[2]}</span>
          <span>{food[3]}</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

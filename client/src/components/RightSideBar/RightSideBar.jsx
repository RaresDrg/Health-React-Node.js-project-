import useAuth from "../../hooks/useAuth";
import useDiary from "../../hooks/useDiary";

const RightSideBar = ({ className: styles }) => {
  const { currentDate, diary } = useDiary();
  const { user } = useAuth();

  const date = new Date(currentDate);

  const day = String(date.getDate()).padStart(2, 0);
  const month = String(date.getMonth() + 1).padStart(2, 0);
  const year = String(date.getFullYear());
  const formatedData = `${day}.${month}.${year}`;

  const dailyRate = diary.dailyRate || user.dailyCalorieIntake;
  const left = diary.left || user.dailyCalorieIntake;
  const consumed = diary.consumed || 0;
  const rateOfNormal = diary.rateOfNormal || "0 %";

  return (
    <div className={styles}>
      <div className="summary">
        <h3>Summary for {formatedData}</h3>
        <div className="columns">
          <div>
            <span>Left</span>
            <span>Consumed</span>
            <span>Daily rate</span>
            <span>Rate of normal</span>
          </div>
          <div>
            <span>{left > 0 ? left : 0} kcal</span>
            <span className={consumed > dailyRate ? "toMuch" : ""}>
              {consumed} kcal
            </span>
            <span>{dailyRate} kcal</span>
            <span>{rateOfNormal}</span>
          </div>
        </div>
      </div>
      <div className="recomandation">
        <h3>Food not recommended</h3>
        <div>
          <span>Flour products</span>
          <span>Milk</span>
          <span>Red meat</span>
          <span>Smoked meats</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

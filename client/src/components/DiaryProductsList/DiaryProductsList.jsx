import { HiX } from "react-icons/hi";

const DiaryProductsList = ({ className: styles, openModal }) => {
  const data = [
    { name: "Eggplant", grams: "100", kcal: "320" },
    { name: "Poultry meat", grams: "100", kcal: "320" },
    { name: "Bread", grams: "100", kcal: "320" },
    { name: "Nut", grams: "100", kcal: "320" },
    { name: "Pork meat", grams: "100", kcal: "320" },
    { name: "Eggplant", grams: "100", kcal: "320" },
    { name: "Poultry meat", grams: "100", kcal: "320" },
    { name: "Bread", grams: "100", kcal: "320" },
    { name: "Nut", grams: "100", kcal: "320" },
    {
      name: "Pork meat de cal de magar cu pula straba",
      grams: "1000",
      kcal: "1320",
    },
    { name: "Eggplant", grams: "100", kcal: "320" },
    { name: "Poultry meat", grams: "100", kcal: "320" },
    { name: "Bread", grams: "100", kcal: "320" },
    { name: "Nut", grams: "100", kcal: "320" },
    { name: "Pork meat", grams: "100", kcal: "320" },
  ];

  return (
    <div className={styles}>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.name}</span>
          <span>
            {item.grams}
            <span>g</span>
          </span>
          <span>
            {item.kcal}
            <span>Kcal</span>
          </span>
          <button type="button" onClick={() => openModal()}>
            <HiX />
          </button>
        </div>
      ))}
    </div>
  );
};

export default DiaryProductsList;

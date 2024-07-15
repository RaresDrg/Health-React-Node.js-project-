import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendarIcon from "../../assets/calendarIcon.svg";

import { useEffect, useState } from "react";
import useResponsive from "../../hooks/useResponsive";

import { useDispatch } from "react-redux";
import { setCurrentDate } from "../../redux/diary/slice";

import { toast } from "react-toastify";

import { getDiaryDateStats } from "../../redux/diary/operations";

const DiaryDateCalendar = ({ className: styles }) => {
  const [startDate, setStartDate] = useState(new Date());
  const { isOnMobile } = useResponsive();

  const dispatch = useDispatch();

  useEffect(() => {
    const dataISO = new Date(startDate.toDateString()).toISOString();

    dispatch(setCurrentDate(startDate.toLocaleDateString()));
    dispatch(getDiaryDateStats(dataISO));
  }, [dispatch, startDate]);

  return (
    <div className={styles}>
      <DatePicker
        selected={startDate}
        onChange={(pickedDate) => {
          setStartDate(pickedDate);
          toast.info(
            `Your diary current date is: 
            ${String(pickedDate.getDate()).padStart(2, 0)}.${String(
              pickedDate.getMonth() + 1
            ).padStart(2, 0)}.${String(pickedDate.getFullYear())}
          `
          );
        }}
        dateFormat="dd.MM.yyyy"
        icon={<img src={calendarIcon} />}
        showIcon
        toggleCalendarOnIconClick
        maxDate={new Date()}
        withPortal={isOnMobile ? true : false}
      />
    </div>
  );
};

export default DiaryDateCalendar;

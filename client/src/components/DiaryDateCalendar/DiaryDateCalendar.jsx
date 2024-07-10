// import ReactDatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import calendarIcon from "../../assets/calendarIcon.svg";

// import { addDays, subDays } from "react-datepicker/dist/date_utils.d.ts";
import { useMediaQuery } from "react-responsive";

const DiaryDateCalendar = ({ className: styles }) => {
  const [startDate, setStartDate] = useState(new Date());
  const isOnMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={styles}>
      <DatePicker
        selected={startDate}
        onChange={(pickedDate) => setStartDate(pickedDate)}
        dateFormat="dd.MM.yyyy"
        icon={<img src={calendarIcon} />}
        showIcon
        toggleCalendarOnIconClick
        maxDate={new Date()}
        // highlightDates={[subDays(new Date(), 0)]}
        withPortal={isOnMobile ? true : false}
      />
    </div>
  );
};

export default DiaryDateCalendar;

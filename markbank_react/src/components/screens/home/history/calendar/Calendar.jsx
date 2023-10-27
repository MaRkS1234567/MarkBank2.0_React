import styles from "./Calendar.module.scss";
import { LuCalendarDays } from "react-icons/lu";
import DateRange from "./date-range/DateRange";
import { useState } from "react";

const Calendar = ({ isShow, setIsShow }) => {
  return (
    <div
      className={styles.calendar}
      styles={{
        background: "#F5F5F5 !important",
      }}
      onClick={() => !isShow && setIsShow(!isShow)}
    >
      {isShow ? <DateRange /> : <p>Select Date Range</p>}
      <div onClick={() => setIsShow(!isShow)} className={styles.background}>
        <LuCalendarDays size={20} />
      </div>
    </div>
  );
};

export default Calendar;

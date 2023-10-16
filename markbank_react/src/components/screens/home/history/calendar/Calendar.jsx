import styles from "./Calendar.module.scss";
import { LuCalendarDays } from "react-icons/lu";
import DateRangePicker from "react-datepicker";
import DemoItem from "react-datepicker";

const Calendar = () => {
  return (
    <>
      <div className={styles.calendar}>
        <p>Select Date Range</p>
        <div>
          <LuCalendarDays size={20} />
        </div>
      </div>
      {/* <DemoItem label="1 calendar" component="DateRangePicker">
        <DateRangePicker calendars={2} />
      </DemoItem> */}
    </>
  );
};

export default Calendar;

import styles from "./History.module.scss";
import Titles from "../../../ui/title/Title";
import { LuCalendarDays } from "react-icons/lu";
import { AiFillBank } from "react-icons/ai";
import { BsChevronRight, BsSteam } from "react-icons/bs";
import Transaction from "./transaction/Transaction";

const History = () => {
  return (
    <div className={styles.history}>
      <div className={styles.top}>
        <Titles>Transaction History</Titles>
        <div className={styles.calendar}>
          <p>Select Date Range</p>
          <LuCalendarDays size={20} />
        </div>
        <button className={styles.arrow}>
          <BsChevronRight size={20} fill="#fff" />
        </button>
      </div>
      <div className={styles.transactions}>
        <Transaction
          name={"Alina Sooela"}
          desc="Sent: Meal Bills"
          date="Wed, 27 September 2023"
          time="1:05 PM"
          sum="275.00"
          isWriteOff={true}
        >
          <p>AS</p>
        </Transaction>
        <Transaction
          name={"Justin Biber"}
          desc="Received: Your Birthday Gift <3"
          date="Tue, 26 September 2023"
          time="9:00 PM"
          sum="1,500.00"
        >
          <p>JB</p>
        </Transaction>
        <Transaction
          name={"Steam"}
          desc="Payment of Crash Bandicoot 4"
          date="Mon, 25 September 2023"
          time="3:15 PM"
          sum="39.99"
          isWriteOff={true}
        >
          <BsSteam size={30} fill="#ed513e" />
        </Transaction>
        <Transaction
          name={"Mark Bank"}
          desc="Deposit interest"
          date="Wed, 20 September 2023"
          time="12.00 AM"
          sum="10,050.00"
        >
          <AiFillBank size={30} fill="#000" />
        </Transaction>
      </div>
    </div>
  );
};

export default History;
